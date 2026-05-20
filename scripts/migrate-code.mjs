import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "src");

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx|ts)$/.test(ent.name)) files.push(p);
  }
  return files;
}

const CLIENT_DIRS = ["components", "page-views", "context", "hooks"];

for (const file of walk(root)) {
  let s = fs.readFileSync(file, "utf8");
  const rel = path.relative(path.join(root, ".."), file);

  if (s.includes("react-router-dom")) {
    if (s.includes('from "react-router-dom"') || s.includes("from 'react-router-dom'")) {
      const needsLink = /\bLink\b/.test(s);
      const needsPathname = /useLocation/.test(s);
      const needsRouter = /useNavigate/.test(s);
      const needsParams = /useParams/.test(s);
      const needsRedirect = /Navigate/.test(s);

      s = s.replace(/import\s+{[^}]+}\s+from\s+["']react-router-dom["'];?\n?/g, "");

      const imports = [];
      if (needsLink) imports.push('import Link from "next/link";');
      if (needsPathname) imports.push('import { usePathname } from "next/navigation";');
      if (needsRouter) imports.push('import { useRouter } from "next/navigation";');
      if (needsParams) imports.push("");
      if (needsRedirect) imports.push('import { useRouter } from "next/navigation";');
      if (imports.filter(Boolean).length) {
        s = imports.filter(Boolean).join("\n") + "\n" + s;
      }

      s = s.replace(/\buseLocation\(\)/g, "usePathname()");
      s = s.replace(/location\.pathname/g, "pathname");
      s = s.replace(/\bto=\{/g, "href={");
      s = s.replace(/\bto="/g, 'href="');
      s = s.replace(/\bto='/g, "href='");
    }
  }

  if (s.includes('from "@/components/SEO"') || s.includes("from '@/components/SEO'")) {
    s = s.replace(/import SEO from ["']@\/components\/SEO["'];?\n?/g, 'import { PageJsonLd } from "@/components/page-json-ld";\n');
    s = s.replace(/<SEO\b/g, "<PageJsonLd");
    s = s.replace(/<\/SEO>/g, "</PageJsonLd>");
  }

  const isClient =
    CLIENT_DIRS.some((d) => rel.includes(`src/${d}`)) &&
  (/\buseState\b|\buseEffect\b|\buseCallback\b|\buseMemo\b|\buseRef\b|window\.|localStorage|usePathname|useRouter|useCart/.test(s) ||
      rel.includes("page-views"));

  if (isClient && !s.startsWith('"use client"') && !s.startsWith("'use client'")) {
    s = '"use client";\n\n' + s;
  }

  fs.writeFileSync(file, s);
}

console.log("Migration script applied.");
