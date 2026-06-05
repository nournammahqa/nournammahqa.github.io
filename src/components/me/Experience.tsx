import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import { mePage } from "@db";

const Experience = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="experience-list"
    >
      {mePage.experience.map((item, index) => (
        <article key={`${item.company}-${index}`} className="experience-item">
          <span className="experience-index">0{index + 1}</span>
          <div className="experience-copy">
            <h4>{item.position}</h4>
            <p>{item.company}</p>
          </div>
        </article>
      ))}
    </motion.div>
  );
};

export default Experience;
