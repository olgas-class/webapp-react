import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useGlobal } from "../context/GlobalContext";
import Alert from "../components/Alert";

export default function AppLayout({ nomeApp }) {
  const { isLoading } = useGlobal();
  return (
    <div className="py-5">
      <Alert />
      <Header nomeApp={nomeApp} />
      <Outlet />
      {isLoading && <Loader />}
    </div>
  );
}
