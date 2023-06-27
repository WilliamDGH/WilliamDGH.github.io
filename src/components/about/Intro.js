import { Fragment } from "react";
const Intro = () => {
  const yearsOfExperience = new Date().getFullYear() - 2019;

  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/about.jpg" alt="developer illustration" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Guanhua Ding</h3>
        <span>Software Engineer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Hi, my name is Guanhua Ding and I am a detail-oriented and driven Full Stack Software Engineer with over {yearsOfExperience} years of experience in designing,
          developing, and implementing applications and solutions utilizing a broad range of technologies and languages such as JavaScript, Node.js, PHP, SQL, and others.
          Proficient in front-end development using React, Vue.js, and Next.js, and skilled in database management with SQL and Elasticsearch.
          Experienced with cloud services like Azure and AWS. Committed to building scalable and efficient software solutions that drive business success.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Location:
                </span>
                <span>Gold Coast / Brisbane, Australia</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:tokyo@gmail.com"
                  >
                    guanhua.ding@outlook.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+61 413 969 140"
                  >
                    +61 413 969 140
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/file/guanhua_ding_06_2023.pdf" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
