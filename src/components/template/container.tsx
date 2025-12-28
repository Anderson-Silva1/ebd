const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col justify-center gap-8 px-4">
      {children}
    </div>
  );
};

export default Container;
