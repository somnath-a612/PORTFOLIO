import { skills } from "@/assets/DataType";
import SkillCard from "./SkillCard";

// const skills = [
//   { title: "HTML", icon: "/icons/html.png" },
//   { title: "CSS", icon: "/icons/css.png" },
//   { title: "JavaScript", icon: "/icons/js.png" },
//   { title: "TypeScript", icon: "/icons/ts.png" },
// ];

export default function SkillsSection() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            progress={skill.progress}
            value={skill.value}
          />
        ))}
      </div>
    </div>
  );
}

// <div className="px-10 mt-12 flex gap-8 flex-wrap">

        
        <div
          className="group w-48 h-56 bg-[#0f1117] border border-gray-600 rounded-xl
          flex flex-col items-center justify-center transition-all duration-300
          hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]
          relative overflow-hidden cursor-pointer"
        >
          {/* Icon Box */}
          <div
            className="w-16 h-16 border border-gray-500 rounded-md flex items-center justify-center
            transition-all duration-300 group-hover:border-green-400
            group-hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]"
          >
            <img
              src="/images/html.png"
              alt="HTML"
              className="w-8 opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Title */}
          <p
            className="mt-3 text-white font-semibold transition-all duration-300
            group-hover:text-green-400"
          >
            HTML
          </p>

          {/* Hidden Info (hover reveal) */}
          <div
            className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0
            transition-all duration-300 w-full px-4 mt-3"
          >
            {/* Progress Bar */}
            <div className="w-[50%] h-1 bg-green-400 rounded-full mx-auto"></div>

            {/* Level Text */}
            <p className="text-center text-sm text-white mt-2">Expert</p>
          </div>
        </div> 
      
