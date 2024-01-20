import { useMemo } from "react";

// icons
import { FaClipboardQuestion } from "react-icons/fa6";

const useMenu = () => {
  const menu = useMemo(
    () => [
      {
        title: "want a challange ? ",
        description: "click here to get a challange.",
        path: "/challange",
        icon: FaClipboardQuestion,
      },
    ],
    []
  );

  return menu;
};

export default useMenu;
