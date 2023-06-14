import { useContext } from "react";
import { TokyoContext } from "../Context";

const Sidebar = () => {
  const { navChange, nav, menus, toggleDarkMode } = useContext(TokyoContext);
  const toggleTheme = () => {
    toggleDarkMode();
  };
  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="leftpart_inner w-full h-auto">
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <div className="logo" data-type="text">
          {" "}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          <a href="#">

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
        <div className="copyright w-full float-left">
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
