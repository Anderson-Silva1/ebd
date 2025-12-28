import clsx from "clsx";

type H1Props = {
  children: React.ReactNode;
} & React.ComponentProps<"h1">;

const H1 = ({ children, className }: H1Props) => {
  return (
    <h1
      className={clsx(
        "text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
