import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary:
    "bg-blue-accent text-white hover:bg-blue-soft hover:text-black-base border-blue-accent shadow-[5px_5px_0_rgba(247,220,111,0.28)]",
  secondary:
    "bg-white text-black-base hover:bg-yellow-accent border-white shadow-[5px_5px_0_rgba(22,131,255,0.22)]",
  ghost:
    "bg-transparent text-white hover:bg-white hover:text-black-base border-white/34",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md border px-5 text-sm font-black transition hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
