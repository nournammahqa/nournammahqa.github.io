import { LoaderLayout } from "@layouts";
import Slide from "react-reveal/Slide";
import "../assets/project.css";
import { FaEye, FaRegImages } from "react-icons/fa6";
import { useModal } from "@hooks";
import SlickSlider, { Settings } from "react-slick";
import { FloatingSparkles, Loader } from "@components";
import { projectsPage } from "@db";
import { useMemo, useState } from "react";
import { LazyImage } from "react-lazy-images";

const Projects = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [SliderModal, { open }] = useModal();
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const allProjects = useMemo(() => projectsPage.flat(), []);

  const settings: Settings = {
    dots: true,
    customPaging: (index: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor:
            activeDot === index ? "#f7b543" : "rgba(255,255,255,0.22)",
          scale: activeDot === index ? "1.3" : "1",
          boxShadow:
            activeDot === index ? "0 0 12px rgba(247,181,67,0.5)" : "",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="!absolute !bottom-10"
      />
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    beforeChange: (_current: number, next: number) => setActiveDot(next),
    afterChange: (index: number) => setActiveDot(index),
  };

  return (
    <LoaderLayout>
      <FloatingSparkles />

      <SliderModal className="projects-modal">
        <div className="min-h-[420px] relative">
          <SlickSlider {...settings}>
            {(selectedImages ?? []).map((item) => (
              <div key={item} className="h-[420px] mt-5">
                <div className="flex w-full h-full rounded-[24px] items-center justify-center relative overflow-hidden">
                  <LazyImage
                    src={item}
                    placeholder={(props: any) => (
                      <div
                        ref={props.ref}
                        className="project-loader project-loader--modal"
                      >
                        <Loader
                          width="100%"
                          height="100%"
                          label="Loading gallery image"
                        />
                      </div>
                    )}
                    actual={(props: any) => (
                      <img
                        className="w-full h-full object-cover transition-all duration-300"
                        {...props.imageProps}
                      />
                    )}
                  />
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </SliderModal>

      <section className="projects-page w-full relative">
        <div className="container mx-auto projects-shell page-enter">
          <div className="projects-heading">
            <Slide bottom>
              <span className="projects-kicker">Selected quality work</span>
            </Slide>
            <Slide bottom>
              <h2 className="projects-title">
                Products supported through structured QA and coordinated delivery.
              </h2>
            </Slide>
            <Slide bottom>
              <p className="projects-intro">
                A curated selection of dashboards, content platforms, ecommerce,
                and business tools where I focused on workflow validation,
                issue tracking, release readiness, and organized team support.
              </p>
            </Slide>
          </div>

          <div className="projects-grid">
            {allProjects.map((project, index) => (
              <Slide
                key={project.id}
                left={index % 2 === 0}
                right={index % 2 !== 0}
              >
                <article className="project-card">
                  <div className="project-media">
                    <LazyImage
                      src={project.main_image}
                      placeholder={(props: any) => (
                        <div ref={props.ref} className="project-loader">
                          <Loader
                            width="100%"
                            height="100%"
                            label={`Loading ${project.name}`}
                          />
                        </div>
                      )}
                      actual={(props: any) => (
                        <img
                          className="project-image"
                          {...props.imageProps}
                          alt={project.name}
                        />
                      )}
                    />
                    <div className="project-media-overlay"></div>
                    <div className="project-tag">QA case study</div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.name}</h3>
                    </div>

                    <p className="project-description">
                      {project.short_description}
                    </p>

                    <div className="project-tech">
                      {project.languages.slice(0, 6).map((item, techIndex) => (
                        <div
                          key={`${project.id}-${techIndex}`}
                          className="project-tech-icon"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            role="img"
                            viewBox="0 0 30 30"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {item}
                          </svg>
                        </div>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.link}
                        className="project-link primary"
                      >
                        <FaEye />
                        <span>Live Preview</span>
                      </a>
                      <button
                        type="button"
                        className="project-link secondary"
                        onClick={() => {
                          open();
                          setActiveDot(0);
                          setSelectedImages(project.images);
                        }}
                      >
                        <FaRegImages />
                        <span>View Gallery</span>
                      </button>
                    </div>
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

export default Projects;
