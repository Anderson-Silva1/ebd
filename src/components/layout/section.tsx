import clsx from "clsx";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={clsx("my-8 space-y-4", className)}>{children}</section>
);
