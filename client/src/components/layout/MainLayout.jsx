import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-6">{children}</main>
    </>
  );
};

export default MainLayout;