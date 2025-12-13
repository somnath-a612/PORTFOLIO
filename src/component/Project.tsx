import SkillCard from "./SkillCard";
import { skills } from "@/assets/DataType";

function Project() {
  return (
    <section id="project" className="max-w-full mx-auto items-center pt-10 px-6 md:px-24 bg-gray-800">
      <h1 className="font-bold text-2xl text-blue-500 font-serif text-center uppercase">
        Skills
      </h1>

       <div className="mt-10 pb-10 max-w-2xl md:max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} icon={skill.icon} progress= {skill.progress} value={skill.value} />
        ))}
      </div>

      
     

    </section>
  );
}

export default Project;
