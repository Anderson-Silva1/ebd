import clsx from "clsx";

type ListItemProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export const ListItem = ({
  children,
  icon = "✔",
  className,
}: ListItemProps) => {
  return (
    <li
      className={clsx(
        "relative pl-7 text-sm leading-relaxed text-slate-700 dark:text-slate-300",
        className,
      )}
    >
      <span className="absolute top-1 left-0 text-amber-400">{icon}</span>
      {children}
    </li>
  );
};
