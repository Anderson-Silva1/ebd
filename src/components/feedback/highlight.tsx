export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded bg-amber-200/40 px-1 font-semibold text-amber-900 dark:bg-amber-400/20 dark:text-amber-300">
    {children}
  </span>
);
