import { createContext, useState, useContext } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {
  const initialData = {
    type: "",
    message: "",
  };

  const [alertData, setAlertData] = useState(initialData);

  const value = { alertData, setAlertData };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
}

function useAlert() {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, useAlert };
