import { createContext, useCallback, useReducer, useEffect } from "react";

// Create Context
const TokyoContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
};
const { NAV, TOGGLE_DARK_MODE } = type;

// Initial Value
const initialState = {
  nav: "home",
  animation: "fadeInLeft",
  menus: [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "about", href: "about" },
    { id: 3, name: "contact", href: "contact" },
  ],
  isDarkMode: true, // initial value for dark mode
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

const TokyoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDarkMode = useCallback(() => {
    dispatch({
      type: TOGGLE_DARK_MODE,
    });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", state.isDarkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    }
  }, [state.isDarkMode]);

  const navChange = useCallback((value) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const { nav, animation, menus, isDarkMode } = state;
  return (
    <TokyoContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        toggleDarkMode,
        isDarkMode,
      }}
    >
      {children}
    </TokyoContext.Provider>
  );
};

export default TokyoState;
export { TokyoContext };
