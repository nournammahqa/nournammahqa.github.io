import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import CountUp from "react-countup";
import { mePage } from "@db";

const IntroSection = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.15)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="about-intro-card"
    >
      <div className="about-intro-copy">
        <span className="about-intro-eyebrow">QA profile</span>
        <h3 className="about-intro-title">
          <span className="text-accent">{mePage.title}</span> with thoughtful
          delivery support and structured ownership.
        </h3>
        <p className="about-intro-description">{mePage.description}</p>
      </div>

      <div className="about-highlight-list">
        <span>Manual and regression testing</span>
        <span>Structured release coordination</span>
        <span>Dashboard and platform experience</span>
        <span>Teaching and mentoring mindset</span>
      </div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="about-stats-grid"
      >
        <div className="about-stat-card">
          <span className="about-stat-value">
            <CountUp delay={1} end={mePage.projects_info.total_project} />+
          </span>
          <span className="about-stat-label">Total Projects</span>
        </div>
        <div className="about-stat-card">
          <span className="about-stat-value">
            <CountUp delay={1} end={mePage.projects_info.finished_project} />+
          </span>
          <span className="about-stat-label">Releases Supported</span>
        </div>
        <div className="about-stat-card">
          <span className="about-stat-value">
            <CountUp delay={2} end={mePage.projects_info.under_development} />+
          </span>
          <span className="about-stat-label">Active Initiatives</span>
        </div>
        <div className="about-stat-card">
          <span className="about-stat-value">
            <CountUp delay={2} end={mePage.projects_info.years_experience} />+
          </span>
          <span className="about-stat-label">Years Experience</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;
