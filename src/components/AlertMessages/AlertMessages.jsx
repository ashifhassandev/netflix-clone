import useAutoClose from "../../hooks/useAutoClose";

const AlertMessage = ({ type, message, onClose }) => {
  useAutoClose(onClose);
  
  const alertTypeClass = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info"
  };

  return (
    <div className={`alert-message ${alertTypeClass[type]}`}>
      <p>{message}</p>
    </div>
  );
};

export default AlertMessage;