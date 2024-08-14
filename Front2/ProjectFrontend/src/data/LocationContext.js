import React, { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    // default
  const [location, setLocation] = useState("Delhi"); 

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
