"use client";

import { JsonLd } from "@/components/json-ld";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/seo";

interface PageJsonLdProps {
  schema?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
}

/** Client-side JSON-LD only — titles/descriptions come from Next metadata. */
export function PageJsonLd({ schema, breadcrumbs }: PageJsonLdProps) {
  const baseSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0 ? buildBreadcrumbSchema(breadcrumbs) : null;
  const allSchemas = breadcrumbSchema ? [...baseSchemas, breadcrumbSchema] : baseSchemas;
  if (allSchemas.length === 0) return null;
  return <JsonLd data={allSchemas} />;
}
