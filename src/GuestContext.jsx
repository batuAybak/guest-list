import { createContext, useState, useContext } from "react";

/**
 * I didn't have to create a Context function and just use props
 * but for the sake of practice, here it is.
 */

// 1. Create the context
const GuestContext = createContext();

// 2. Specify information to provide from the context
export function GuestProvider({ children }) {
  const [selectedGuest, setSelectedGuest] = useState();

  const value = { selectedGuest, setSelectedGuest };
  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
}

// 3. Create a hook for components to use this context
export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) throw Error("useTheme must be used within a GuestContext");

  return context;
}
