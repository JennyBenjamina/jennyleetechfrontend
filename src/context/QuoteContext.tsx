import React, { createContext, useContext, useState } from "react";

type QuoteContextType = {
  quoteFetched: boolean;
  setQuoteFetched: (fetched: boolean) => void;
};

// Create the context with an undefined initial value
const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quoteFetched, setQuoteFetched] = useState(false);

  return (
    <QuoteContext.Provider value={{ quoteFetched, setQuoteFetched }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = (): QuoteContextType => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
};
