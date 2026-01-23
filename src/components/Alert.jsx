import { useAlert } from "../context/AlertContext";

export default function Alert() {
  const { alertData, setAlertData } = useAlert();

  function dismissAlert() {
    setAlertData({
      type: "",
      message: "",
    });
  }

  if (alertData.message) {
    return (
      <div
        className={`mt-4 alert alert-${alertData.type} alert-dismissible fade show`}
        role="alert"
      >
        <div>{alertData.message}</div>
        <button
          onClick={dismissAlert}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    );
  } else {
    return null;
  }
}
