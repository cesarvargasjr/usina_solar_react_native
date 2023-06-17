import { createContext, useContext, useState } from "react";

interface ContextProps {
  animate: boolean;
  setAnimate: (_: any) => any;
}

export const AnimateContext = createContext({} as ContextProps);

function AnimateProvider({ children }: any) {
  const [animate, setAnimate] = useState(true);

  return (
    <AnimateContext.Provider value={{ animate, setAnimate }}>
      {children}
    </AnimateContext.Provider>
  );
}

const useAnimate = () => useContext(AnimateContext);

export { AnimateProvider, useAnimate };
