import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import OurClasses from "@/components/ourClasses";
import Benefits from "@/components/benefits";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import SignIn from "@/pages/auth/signIn/signIn";
import VerifyOtp from "@/pages/auth/verifyOTP/VerifyOtp";
import { SelectedPage } from "@/shared/types";
import { ThemeProvider } from "./context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
const AdminRouter = lazy(() => import("./routes/AdminRouter"));

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HelmetProvider>

    <ThemeProvider>

    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Home setSelectedPage={setSelectedPage} />
              <Benefits setSelectedPage={setSelectedPage} />
              <OurClasses setSelectedPage={setSelectedPage} />
              <ContactUs setSelectedPage={setSelectedPage} />
              <Footer />
            </>
          }
        />

        {/* Public Auth Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* Admin Template Routes */}
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<div>Loading Admin Panel...</div>}>
              <AdminRouter />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
    </ThemeProvider >
        </HelmetProvider>


  );
}

export default App;
