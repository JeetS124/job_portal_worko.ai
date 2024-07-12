import { useState } from "react";

import LoginContext from "./LoginContext";

const LoginContextProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  return (
    <LoginContext.Provider
      value={{
        showLoginModal  ,
        setShowLoginModal,
        handleShowLoginModal,
        handleCloseLoginModal,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
