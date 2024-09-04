import { notification } from "antd";

export const openSuccessNotification = (description:string) => {
    notification.success({
      message: "Success",
      description: description,
      placement: "topRight",
      style: {
        backgroundColor: "#f6ffed",
        border: "1px solid #b7eb8f",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    });
  };

 