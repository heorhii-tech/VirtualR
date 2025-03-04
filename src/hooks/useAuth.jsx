import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
   
  };

  const handleClose = () => {
    setIsOpen(false);
    closeMobileDrawer();
  };

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  useEffect(() => {
    console.log(mobileDrawerOpen);
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileDrawerOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === "login") {
      console.log("Logging in...");
    } else {
      console.log("Signing up...");
    }
    handleClose();
    closeMobileDrawer(); 
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    handleSubmit(e);
    setIsLoading(false);
  };

  return {
    isOpen,
    setIsOpen,
    view,
    setView,
    handleOpen,
    handleClose,
    handleSubmit,
    handleFormSubmit,
    isLoading,
    toggleNavbar,
    closeMobileDrawer,
    mobileDrawerOpen,
  };
};