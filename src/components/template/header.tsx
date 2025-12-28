const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex w-full items-center justify-center p-4">
      {children}
    </header>
  );
};

export default Header;
