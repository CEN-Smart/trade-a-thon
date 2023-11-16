type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <main
      className={`mx-auto max-w-7xl px-2  sm:px-6 lg:px-8 
     ${className}`}
    >
      {children}
    </main>
  );
};

export default Container;
