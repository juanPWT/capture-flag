"use client";
import React, { createContext, useContext, useState } from "react";
import Confetti from "react-confetti";

const ConfettiContext = createContext({} as any);

export const useConfetti = () => {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error("useConfetti must be used within a ConfettiProvider");
  }
  return context;
};

export const ConfettiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);

  const confetti = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const confettiContextValue = {
    show,
    confetti,
  };

  return (
    <ConfettiContext.Provider value={confettiContextValue}>
      {show && (
        <Confetti height={window.innerHeight} width={window.innerWidth} />
      )}
      {children}
    </ConfettiContext.Provider>
  );
};

export default ConfettiProvider;
