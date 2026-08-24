import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Process from "./pages/Process";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import { scrollForLocation, usePathname } from "./router";

const routes: Record<string, React.FC> = {
  "/": Home,
  "/profile": Profile,
  "/industries": Industries,
  "/quality": Quality,
  "/process": Process,
  "/clients": Clients
};

export default function App() {
  const pathname = usePathname();
  const Page = routes[pathname.replace(/\/+$/, "") || "/"] ?? NotFound;

  // Land on the hash target (or the top of the page) whenever the route changes.
  useEffect(() => {
    scrollForLocation();
  }, [pathname]);

  return (
    <div className="bg-[#FCFAF7] min-h-screen text-[#1A1A1A] selection:bg-brand-yellow selection:text-brand-dark font-sans antialiased">
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}
