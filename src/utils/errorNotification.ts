import { notification } from "antd";

export const openErrorNotification = (description: string) => {
  notification.error({
    message: "Error",
    description: description,
    placement: "topRight",
    style: {
      backgroundColor: "#fff1f0",
      border: "1px solid #ffa39e",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  });
};

