import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col max-h-screen bg-gray-950 text-white">
      <NavBar />
      <main className="flex-grow pt-6">
         {children}
      </main>
      <hr  className="border border-gray-600"/>
      <Footer />
    </div>
  );
};

export default Layout;
