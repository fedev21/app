import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({
  currentTab,
  setCurrentTab,
  children
}) => {

  return (
    <>
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="container main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
