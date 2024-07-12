import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Index from "./pages/index";
import LoginModal from "./components/Loginmodal";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";
import LoginContextProvider from "./context/LoginContextProvider";

function App() {
  const { showLoginModal, handleCloseLoginModal } = useContext(LoginContext);
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/login"
              element={
                <LoginModal
                  show={showLoginModal}
                  handleClose={handleCloseLoginModal}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
