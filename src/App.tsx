import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import SignIn from "@/scenes/signIn/signIn";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
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
    <BrowserRouter>
      <Routes>
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
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
