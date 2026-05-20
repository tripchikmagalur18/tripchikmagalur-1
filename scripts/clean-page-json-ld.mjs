import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "page-views");

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"))) {
  let s = fs.readFileSync(path.join(dir, file), "utf8");
  s = s.replace(
    /<PageJsonLd[\s\S]*?(\/>|<\/PageJsonLd>)/g,
    (block) => {
      const schema = block.match(/schema=\{[\s\S]*?\}(?=\s*(?:ogType|breadcrumbs|canonical|title|description|ogImage|noindex|\/))/);
      const breadcrumbs = block.match(/breadcrumbs=\{[\s\S]*?\}(?=\s*(?:ogType|canonical|title|description|\/|schema))/);
      if (!schema && !breadcrumbs) {
        if (block.includes('canonical="/"') && !schema) return "";
        return block
          .replace(/\s+title=\{[^}]+\}/g, "")
          .replace(/\s+title="[^"]*"/g, "")
          .replace(/\s+description=\{[^}]+\}/g, "")
          .replace(/\s+description="[^"]*"/g, "")
          .replace(/\s+canonical=\{[^}]+\}/g, "")
          .replace(/\s+canonical="[^"]*"/g, "")
          .replace(/\s+ogType="[^"]*"/g, "")
          .replace(/\s+ogImage=\{[^}]+\}/g, "")
          .replace(/\s+noindex/g, "");
      }
      let out = "<PageJsonLd";
      if (schema) out += ` ${schema[0]}`;
      if (breadcrumbs) out += ` ${breadcrumbs[0]}`;
      return out + " />";
    },
  );
  s = s.replace(/<PageJsonLd\s+canonical="\/"\s*\/>/g, "");
  fs.writeFileSync(path.join(dir, file), s);
}

console.log("Cleaned PageJsonLd props");
