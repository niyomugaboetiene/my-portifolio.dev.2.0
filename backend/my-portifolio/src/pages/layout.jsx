import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <NavBar />
      <div className="pt-6">{children}</div>
    </div>
  );
};

export default Layout;
