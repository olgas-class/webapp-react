import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout({ nomeApp }) {
  return (
    <>
      <Header nomeApp={nomeApp} />
      <Outlet />
    </>
  );
}
