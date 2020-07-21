import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
 
//   this will make the page back to the top after render.
//   Found this solution somwhere

  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [pathname]);
 
  return children;
}
 
export default ScrollToTop;