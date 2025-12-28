import clsx from "clsx";

type H2Props = {
  children: React.ReactNode;
} & React.ComponentProps<"h2">;

const H2 = ({ children, className }: H2Props) => {
  return (
    <h2
      className={clsx(
        "text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
