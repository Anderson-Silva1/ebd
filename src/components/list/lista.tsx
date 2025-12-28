import clsx from "clsx";

type ListProps = {
  children: React.ReactNode;
  className?: string;
};

export const List = ({ children, className }: ListProps) => {
  return (
    <ul className={clsx("my-4 flex flex-col gap-3", className)}>{children}</ul>
  );
};
