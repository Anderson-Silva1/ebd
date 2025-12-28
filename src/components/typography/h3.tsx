import clsx from "clsx";

type H3Props = {
  children: React.ReactNode;
} & React.ComponentProps<"h3">;

const H3 = ({ children, className }: H3Props) => {
  return (
    <h3
      className={clsx(
        "mt-6 border-t-2 border-amber-300 pt-3 text-xl font-semibold text-slate-800 dark:text-slate-200",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
