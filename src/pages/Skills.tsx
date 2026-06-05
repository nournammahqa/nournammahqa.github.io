import "../assets/skills.css";
import { CSSProperties } from "react";
import { LoaderLayout } from "@layouts";
import Slide from "react-reveal/Slide";
import { skillsPage } from "@db";
import { FloatingSparkles } from "@components";

const Skills = () => {
  return (
    <LoaderLayout>
      <FloatingSparkles />
      <section className="skills-page w-full relative">
        <div className="container mx-auto skills-shell page-enter">
          <div className="skills-heading">
            <Slide bottom>
              <span className="skills-kicker">Core toolkit</span>
            </Slide>
            <Slide bottom>
              <h2 className="skills-title">
                The quality, testing, and coordination toolkit I use to support
                reliable product delivery.
              </h2>
            </Slide>
            <Slide bottom>
              <p className="skills-intro">
                A balanced toolkit across testing, documentation, release
                preparation, and day-to-day coordination. I care about clear
                communication, visible quality, and smooth delivery.
              </p>
            </Slide>
          </div>

          <div className="skills-grid">
            {skillsPage.map((item, index) => (
              <Slide key={item.name} left={index % 3 === 0} right={index % 3 !== 0}>
                <article
                  className="skill-card"
                  style={{ "--clr": item.color } as CSSProperties}
                >
                  <div className="skill-ring-wrap">
                    <div
                      className="skill-ring"
                      style={
                        {
                          "--percent": `${item.rate}%`,
                          "--clr": item.color,
                        } as CSSProperties
                      }
                    >
                      <div className="skill-ring-inner">
                        <span className="skill-value">
                          {item.rate}
                          <span>%</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="skill-copy">
                    <h3>{item.name}</h3>
                    <p>
                      Practical experience using {item.name} to support product
                      quality, delivery visibility, and dependable team execution.
                    </p>
                  </div>
                </article>
              </Slide>
            ))}
          </div>
        </div>
      </section>
    </LoaderLayout>
  );
};

export default Skills;
