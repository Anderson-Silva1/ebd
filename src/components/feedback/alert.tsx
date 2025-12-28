import clsx from "clsx";

type AlertProps = {
  children: React.ReactNode;
  variant?: "info" | "warning" | "success";
};

const variants = {
  info: "bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300",
  warning: "bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300",
  success:
    "bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300",
};

export const Alert = ({ children, variant = "info" }: AlertProps) => (
  <div className={clsx("rounded-xl border p-4 text-sm", variants[variant])}>
    {children}
  </div>
);
