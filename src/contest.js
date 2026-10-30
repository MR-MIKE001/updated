import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

const getInitialState = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return { darkMode: saved === "dark" };
    return { darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches };
  } catch {
    return { darkMode: false };
  }
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, undefined, getInitialState);

  // Colors live in CSS variables keyed off data-theme, so components don't need inline styles
  useEffect(() => {
    const theme = state.darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [state.darkMode]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
