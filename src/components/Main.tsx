// Main.tsx
interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main
      className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
      style={{ width: "100vw", height: "100vh" }}
    >
      {children}
    </main>
  );
};

export default Main;
