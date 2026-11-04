import Cursor from "@/src/layout/Cursor";
import Mobile from "@/src/layout/Mobile";
import Sidebar from "@/src/layout/Sidebar";
import { tokyo } from "@/src/utils";
import { Fragment, useEffect } from "react";
const Layout = ({ children }) => {
  useEffect(() => {
    tokyo.dataImage();
    tokyo.imageToSvg();
    tokyo.customCursor();
  }, []);
  return (
    <Fragment>
      {/* WRAPPER ALL */}
      <div className="tokyo_tm_all_wrap">
        {/* MOBILE MENU */}
        <Mobile />
        {/* /MOBILE MENU */}
        {/* LEFTPART */}
        <Sidebar />
        {/* /LEFTPART */}
        {/* RIGHTPART */}
        <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
          <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
            {children}
          </div>
        </div>
        {/* /RIGHTPART */}
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
};
export default Layout;
