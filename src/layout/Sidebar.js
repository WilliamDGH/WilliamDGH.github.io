import { useContext } from "react";
import { TokyoContext } from "../Context";
import Image from 'next/image'

const Sidebar = () => {
  const { navChange, nav, menus, toggleDarkMode, isDarkMode } = useContext(TokyoContext);
  const toggleTheme = () => {
    toggleDarkMode();
  };
  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="leftpart_inner w-full h-auto">
        <div className="logo" data-type="image">
          {" "}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          <a href="#">
          {isDarkMode ? 
            <Image src="/assets/img/logo/guanhua-ding-logo-dark.png" alt="Logo" width={200} height={200} />
            : 
            <Image src="/assets/img/logo/guanhua-ding-logo-light.png" alt="Logo" width={200} height={200} />
          }

            <h3 className="font-poppins font-black text-[31px] tracking-[5px]">
              G. D.
            </h3>
          </a>
        </div>
        <div className="menu px-[0px] py-[50px] w-full float-left">
          <ul className="transition_link m-0 list-none">
            {menus.map((menu) => (
              <li
                className={`m-0 w-full float-left ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <a
                  className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                  href={`#${menu.href}`}
                  onClick={() => navChange(menu.href)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input type="checkbox" class="checkbox" id="checkbox" onChange={toggleTheme}/>
          <label for="checkbox" class="checkbox-label">
            <i className="icon-moon" style={{ color: '#f1c40f' }}></i>
            <i className="icon-sun" style={{ color: '#f39c12' }}></i>
            <span class="ball"></span>
          </label>
        </div>
        <div className="copyright w-full float-left" style={{ marginTop: '10px' }}>
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
    </div>
  );
};
export default Sidebar;
