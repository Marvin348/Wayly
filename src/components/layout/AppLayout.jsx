import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center"/>
      <Outlet />
      <Footer />
    </>
  );
};
export default AppLayout;
