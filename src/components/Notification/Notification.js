import React from "react";
import StyledNotification from "./Notification.styled";

const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null;
  }

  return (
    <StyledNotification>
      <div id="notification" className={messageType}>
        {message}
      </div>
    </StyledNotification>
  );
};

export default Notification;
