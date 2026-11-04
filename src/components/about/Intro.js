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
        <span>Software Engineer · Backend (Java / TypeScript)</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Hi, my name is Guanhua Ding and I am a detail-oriented backend software engineer with over {yearsOfExperience} years of experience building
          production APIs, event-driven architectures, and distributed services. Across Leonardo.Ai and Canva I have shipped end-to-end generative-AI
          pipelines, cross-platform SSO authentication, and enterprise admin backends using Java and TypeScript/Node.js. I work AI-first, pairing coding
          agents with strict specification design, automated testing, and code review.
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
                    href="mailto:hi@guanhua.me"
                  >
                    hi@guanhua.me
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
                    href="tel:+61413969140"
                  >
                    0413 969 140
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/file/guanhua_ding_11_2026.pdf" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
