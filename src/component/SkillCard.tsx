

type props = 
   { icon: string,
    title: string,
    progress: string,
    value: string | undefined
    }


const SkillCard = ({ icon, title, progress, value }: props) => {
  return (
   <div id="Skill"
          className="group w-40 h-40 bg-black/30 border border-green-500/40 rounded-xl
          flex flex-col items-center justify-center transition-all duration-300
          hover:border-green-400 hover:scale-110  hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]
          relative overflow-hidden cursor-pointer"
        >
          {/* Icon Box */}
          <div
            className="w-16 h-16 border border-gray-500 rounded-md flex items-center justify-center
            transition-all duration-300 group-hover:border-green-400
             group-hover:bg-green-100"
          >
            <img
              src={icon}
              alt={title}
              className="size-10 mx-auto opacity-70 group-hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Title */}
          <p
            className="mt-3 text-white font-semibold transition-all duration-300
            group-hover:text-green-400"
          >
            {title}
          </p>

          {/* Hidden Info (hover reveal) */}
          <div
            className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0
            transition-all duration-300 w-34  mt-3"
          >
            {/* Progress Bar */}
            <div className={`${value} h-1 px-4 bg-gradient-to-r from-green-400 to-blue-400  rounded-full items-start`}></div>

            {/* Level Text */}
            <p className="text-center text-sm text-white mt-2">{progress}</p>
          </div>
        </div> 
  );
};

export default SkillCard;
