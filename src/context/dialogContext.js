import { useContext, createContext, useState } from "react";

export const DialogContext = createContext(null);

export const DialogContextProvider = ({ children }) => {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <DialogContext.Provider value={{ dialogOpened, setDialogOpened }}>
      {children}
    </DialogContext.Provider>
  );
};
