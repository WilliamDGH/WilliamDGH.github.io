import { Fragment, useContext, useState } from "react";
import { TokyoContext } from "../Context";
import Image from 'next/image'

const Mobile = () => {
  const [toggle, setToggle] = useState(false);
  const { navChange, nav, menus, toggleDarkMode, isDarkMode } = useContext(TokyoContext);
  const toggleTheme = () => {
    toggleDarkMode();
  };
  return (
    <Fragment>
      <div className="tokyo_tm_topbar bg-white fixed top-0 left-0 right-0 h-[50px] z-[14] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo" data-type="image">
            {" "}
            {/* You can use image or text as logo. data-type values are "image" and "text" */}
            <a href="#">
              {isDarkMode ? 
                <Image src="/assets/img/logo/guanhua-ding-logo-dark.png" alt="Logo" width={100} height={100} /> 
                : 
                <Image src="/assets/img/logo/guanhua-ding-logo-light.png" alt="Logo" width={100} height={100} />
              }
              <h3 className="font-black font-poppins text-[25px] tracking-[4px]">
                TOKYO
              </h3>
            </a>
          </div>
          <div className="trigger relative top-[5px]">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box w-[30px]">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]">
          <ul className="transition_link list-none">
            {menus.map((menu) => (
              <li
                className={`active mb-[7px] ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <a
                  className="text-black font-montserrat"
                  href={`#${menu.href}`}
                  onClick={() => {
                    navChange(menu.href);
                    setToggle(!toggle);
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="inline-block">
            <input type="checkbox" class="checkbox" id="checkbox" onChange={toggleTheme}/>
            <label for="checkbox" class="checkbox-label">
              <i className="icon-moon" style={{ color: '#f1c40f' }}></i>
              <i className="icon-sun" style={{ color: '#f39c12' }}></i>
              <span class="ball"></span>
            </label>
          </div>
        </div>
        <div className="copyright w-full float-left px-[20px] text-right" style={{ marginTop: '10px' }}>
            <p className="text-[15px] text-[#999] font-montserrat leading-[25px]">
              © {new Date().getFullYear()} Made With ❤
              <br />
              by{" "}
              <a
                className="text-[#787878] font-medium transition-all duration-300 hover:text-black"
                href="https://www.linkedin.com/in/guanhuading/"
                target="_blank"
              >
                Guanhua Ding
              </a>
            </p>
          </div>
      </div>
    </Fragment>
  );
};
export default Mobile;
