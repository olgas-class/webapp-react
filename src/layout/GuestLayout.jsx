import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const GuestLayout = () => {
  const { isLoading } = useContext(GlobalContext);
  return (
    <>
      <AppHeader />

      {isLoading && (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <Outlet />

      <AppFooter />
    </>
  );
};

export default GuestLayout;
