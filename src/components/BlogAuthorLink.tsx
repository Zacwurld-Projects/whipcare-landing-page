type BlogAuthorLinkProps = {
  name: string | null;
  href: string | null;
  className?: string;
};

export function BlogAuthorLink({
  name,
  href,
  className = "",
}: BlogAuthorLinkProps) {
  if (!name) return null;

  const baseClass = `font-inter font-medium text-[#701e00] hover:underline ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer author"
        className={baseClass}
      >
        {name}
      </a>
    );
  }

  return <span className={`font-inter font-medium text-[#111928] ${className}`}>{name}</span>;
}
