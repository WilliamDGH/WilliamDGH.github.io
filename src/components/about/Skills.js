const languages = [
  { id: 1, name: "TypeScript", value: 95 },
  { id: 2, name: "JavaScript", value: 95 },
  { id: 3, name: "Java", value: 85 },
  { id: 4, name: "SQL", value: 85 },
  { id: 5, name: "PHP", value: 80 },
];
const frameworks = [
  { id: 1, name: "Node.js / Nest.js", value: 92 },
  { id: 2, name: "Spring Boot", value: 85 },
  { id: 3, name: "React / Next.js", value: 90 },
  { id: 4, name: "GraphQL (Hasura)", value: 80 },
];
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Programming Languages</h3>
            </div>
            <div className="tokyo_progress">
              {languages.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Frameworks</h3>
            </div>
            <div className="tokyo_progress">
              {frameworks.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
