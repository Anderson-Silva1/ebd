import clsx from "clsx";

type BlockquoteProps = {
  children: React.ReactNode;
  className?: string;
};

export const Blockquote = ({ children, className }: BlockquoteProps) => (
  <blockquote
    className={clsx(
      "border-l-4 border-amber-400 pl-4 text-slate-700 italic dark:text-slate-300",
      className,
    )}
  >
    {children}
  </blockquote>
);
