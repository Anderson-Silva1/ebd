export const P = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="block text-sm leading-relaxed text-slate-700 dark:text-slate-300">
      {children}
    </span>
  );
};
