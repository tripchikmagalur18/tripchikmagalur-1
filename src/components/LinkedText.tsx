import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Renders plain text with inline internal links: [label](/path)
 * Only use for trusted content from our data files.
 */
export function LinkedText({ text, className }: { text: string; className?: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    parts.push(
      <Link
        key={`${match.index}-${match[1]}`}
        href={match[2]}
        className="text-sunset font-medium hover:underline underline-offset-2"
      >
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  if (parts.length === 0) {
    return <>{text}</>;
  }

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </span>
  );
}
