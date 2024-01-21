import { useMemo } from "react";

// icons
import { FaClipboardQuestion } from "react-icons/fa6";
import { SiAnswer } from "react-icons/si";

const useMenu = () => {
  const menu = useMemo(
    () => [
      {
        title: "want a challenge ? ",
        description: "click here to get a challenge.",
        path: "/challange",
        icon: FaClipboardQuestion,
      },
      {
        title: "your result challenge ",
        description: "your all answering challenge in here.",
        path: "/result",
        icon: SiAnswer,
      },
    ],
    []
  );

  return menu;
};

export default useMenu;
