import type React from "react";

const Comentario = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {children}
      </p>
    </div>
  );
};

export default Comentario;
