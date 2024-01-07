const Notification = ({ message, status }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={status == "failed" ? "error" : "success"}>{message}</div>
  );
};
export default Notification;
