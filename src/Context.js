import { createContext, useCallback, useReducer, useEffect } from "react";

// Create Context
const TokyoContext = createContext();

// Type
const type = {
  NAV: "NAV",
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  SERVICEMODAL: "SERVICEMODAL",
  NEWSMODAL: "NEWSMODAL",
  PORTFOLIODETAILSMODAL: "PORTFOLIODETAILSMODAL",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE", // new type for dark mode
};
const {
  NAV,
  ANIMATION,
  MODAL,
  SERVICEMODAL,
  NEWSMODAL,
  PORTFOLIODETAILSMODAL,
  TOGGLE_DARK_MODE
} = type;

// Initial Value
const initialState = {
  nav: "home",
  animation: "fadeInLeft",
  modal: false,
  serviceModal: null,
  newsModal: null,
  portfolioDetailsModal: null,
  menus: [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "about", href: "about" },
    { id: 3, name: "service", href: "service" },
    { id: 4, name: "portfolio", href: "portfolio" },
    { id: 5, name: "news", href: "news" },
    { id: 6, name: "contact", href: "contact" },
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
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case NEWSMODAL:
      return {
        ...state,
        newsModal: payload,
      };
    case PORTFOLIODETAILSMODAL:
      return {
        ...state,
        portfolioDetailsModal: payload,
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

// Watson State
const TokyoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDarkMode = useCallback(() => {
    dispatch({
      type: TOGGLE_DARK_MODE,
    });
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', state.isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
    }
  }, [state.isDarkMode]);

  const navChange = useCallback((value) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value) => {
    dispatch({
      type: ANIMATION,
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setNewsModal = useCallback((value) => {
    dispatch({
      type: NEWSMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioDetailsModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIODETAILSMODAL,
      payload: value,
    });
  }, []);

  const {
    nav,
    animation,
    modal,
    serviceModal,
    newsModal,
    portfolioDetailsModal,
    menus,
    isDarkMode,
  } = state;
  return (
    <TokyoContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        animationChnage,
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        newsModal,
        setNewsModal,
        portfolioDetailsModal,
        setPortfolioDetailsModal,
        toggleDarkMode, // provide isDarkMode and toggleDarkMode to context
      }}
    >
      {children}
    </TokyoContext.Provider>
  );
};

export default TokyoState;
export { TokyoContext };
