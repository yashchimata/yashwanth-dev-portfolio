import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiGraphql, SiDocker, SiSpring, SiHtml5, SiCss3, SiTypescript, SiMysql, SiAwsamplify, SiPostman, SiJenkins, SiCsharp, SiPython, SiGo, SiGit } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaAngular, FaAws, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="mt-2 text-sm font-medium text-white">React.js</p>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <TbBrandNextjs className="text-7xl" />
          <p className="mt-2 text-sm font-medium text-white">Next.js</p>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <p className="mt-2 text-sm font-medium text-white">MongoDB</p>
        </motion.div>

        {/* Redis */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <DiRedis className="text-7xl text-red-700" />
          <p className="mt-2 text-sm font-medium text-white">Redis</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <p className="mt-2 text-sm font-medium text-white">Node.js</p>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <p className="mt-2 text-sm font-medium text-white">PostgreSQL</p>
        </motion.div>

        {/* TailwindCSS */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
          <p className="mt-2 text-sm font-medium text-white">TailwindCSS</p>
        </motion.div>

        {/* GraphQL */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiGraphql className="text-7xl text-pink-400" />
          <p className="mt-2 text-sm font-medium text-white">GraphQL</p>
        </motion.div>

        {/* Docker */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiDocker className="text-7xl text-blue-500" />
          <p className="mt-2 text-sm font-medium text-white">Docker</p>
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <FaJava className="text-7xl text-red-500" />
          <p className="mt-2 text-sm font-medium text-white">Java</p>
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiSpring className="text-7xl text-green-600" />
          <p className="mt-2 text-sm font-medium text-white">Spring Boot</p>
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiMysql className="text-7xl text-blue-600" />
          <p className="mt-2 text-sm font-medium text-white">MySQL</p>
        </motion.div>

        {/* Angular */}
        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <FaAngular className="text-7xl text-red-600" />
          <p className="mt-2 text-sm font-medium text-white">Angular</p>
        </motion.div>

        {/* AWS */}
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <FaAws className="text-7xl text-orange-500" />
          <p className="mt-2 text-sm font-medium text-white">AWS</p>
        </motion.div>

        {/* HTML5 */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
          <p className="mt-2 text-sm font-medium text-white">HTML5</p>
        </motion.div>

        {/* CSS3 */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiCss3 className="text-7xl text-blue-500" />
          <p className="mt-2 text-sm font-medium text-white">CSS3</p>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiTypescript className="text-7xl text-blue-600" />
          <p className="mt-2 text-sm font-medium text-white">TypeScript</p>
        </motion.div>

        {/* AWS Amplify */}
        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiAwsamplify className="text-7xl text-orange-400" />
          <p className="mt-2 text-sm font-medium text-white">AWS Amplify</p>
        </motion.div>

        {/* Postman */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiPostman className="text-7xl text-orange-500" />
          <p className="mt-2 text-sm font-medium text-white">Postman</p>
        </motion.div>

        {/* Jenkins */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiJenkins className="text-7xl text-blue-600" />
          <p className="mt-2 text-sm font-medium text-white">Jenkins</p>
        </motion.div>

        {/* C# */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiCsharp className="text-7xl text-purple-600" />
          <p className="mt-2 text-sm font-medium text-white">C#</p>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiPython className="text-7xl text-yellow-500" />
          <p className="mt-2 text-sm font-medium text-white">Python</p>
        </motion.div>

        {/* GoLang */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiGo className="text-7xl text-blue-600" />
          <p className="mt-2 text-sm font-medium text-white">GoLang</p>
        </motion.div>

        {/* Git */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 flex flex-col items-center"
        >
          <SiGit className="text-7xl text-orange-600" />
          <p className="mt-2 text-sm font-medium text-white">Git</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
