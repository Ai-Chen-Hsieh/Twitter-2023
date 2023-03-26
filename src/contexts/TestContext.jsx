import { createContext, useContext } from "react";

const defaultTextContext = {
  text1: 1,
  text2: 2
}
const TextContext = createContext(defaultTextContext);
export const useText = () => {return useContext(TextContext)}

export const TextProvider = ({children}) => {
  return (
    <TextContext.Provider
      value={{
        text1: defaultTextContext.text1,
        text2: defaultTextContext.text2
      }}
    >
      { children }
    </TextContext.Provider>
  )
}

