import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import AuthModal from "./AuthModal"; 

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileDrawerOpen]);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <a
              href="/"
              className="text-xl tracking-tight hover:opacity-70 transition-all duration-200 cursor-pointer"
            >
              VirtualR
            </a>
          </div>
          <ul className="hidden lg:flex ml-auto mr-10 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:opacity-70 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center gap-4">
            <AuthModal defaultView="login" /> {/* Кнопка Login */}
            <AuthModal defaultView="signup" /> {/* Кнопка Sign Up */}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-12 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden h-[calc(100vh-3rem)] gap-4">
            
              {navItems.map((item, index) => (
             
                  <a href={item.href} key={index} onClick={closeMobileDrawer} className="p-2 flex flex-col gap-4 border rounded-md border-zinc-300 w-[180px] text-center">
                    {item.label}
                  </a>
         
              ))}
            
            <div className="flex flex-col gap-4 ">
              <AuthModal defaultView="login" className="w-[180px] text-center" /> 
              <AuthModal defaultView="signup" className="w-[180px] text-center" /> 
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;