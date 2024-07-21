import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import LeftArrow from "../svg/LeftArrow";
import RightArrow from "../svg/RightArrow";

const Project = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const projectIndex = projects.findIndex((project) => project.id === +id);
  const project = projects[projectIndex];
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return project ? (
    <div className="w-full pt-10">
      <img src={project.poster} alt="" />
      <div className="w-full xl:mt-[115px] xl:flex xl:gap-x-20">
        <div className="w-full mt-10 xl:w-[350px] xl:mt-0">
          <div className="w-full h-[1px] bg-darkGray opacity-[15%]"></div>
          <div className="w-full md:flex md:items-center md:gap-x-2 xl:block">
            <div className="w-full md:w-1/2 xl:w-full">
              <h2 className="mt-6 Ibarra font-bold text-[40px] leading-[42px] break-words capitalize">
                {project.name}
              </h2>
              <p className="w-full public-sans font-normal text-[15px] leading-[30px] text-darkGray opacity-80 h-fit mt-6 md:hidden xl:block">
                {project.description}
              </p>
              <h3 className="mt-6 public-sans font-bold text-[13px] leading-[30px] text-tag">
                {project.tags}
              </h3>
              <h3 className="public-sans font-bold text-[13px] leading-[30px] text-tag uppercase mb-6">
                {project.tools.join(" / ")}
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="decoration-none public-sans w-[176px] font-normal text-xs py-4 px-8 text-center border-[1px] border-darkGray"
              >
                VIEW PROJECT
              </a>
            </div>
            <p className="w-1/2 public-sans font-normal text-[15px] leading-[30px] text-darkGray opacity-80 h-fit mt-6 hidden md:block xl:hidden">
              {project.description}
            </p>
          </div>
          <div className="w-full h-[1px] bg-darkGray opacity-[15%] mt-8"></div>
        </div>
        <div className="w-full mt-12 xl:mt-0">
          <h2 className="Ibarra font-normal text-[32px] leading-[42px] break-words capitalize text-darkGray">
            Project Background
          </h2>
          <p className="mt-7 public-sans font-normal text-[15px] leading-[30px] text-darkGray">
            {project.playground}
          </p>
          <h2 className="Ibarra font-normal text-[32px] leading-[42px] break-words capitalize text-darkGray mt-10">
            Static Previews
          </h2>
          <div className="w-full mt-10 flex flex-col gap-y-8">
            {project.screens.map((screen) => (
              <img key={screen} alt="screenshot" src={screen} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-16 flex border-y-[1px] border-y-[rgba(51, 50, 61, 0.15)]">
        <div className="w-1/2 border-r-[1px] border-r-[rgba(51, 50, 61, 0.15)] py-6">
          {previousProject ? (
            <div className="w-full flex flex-col justify-center">
              <LeftArrow
                onClick={() => navigate("/projects/" + previousProject.id)}
              />
              <h2
                className="Ibarra font-normal text-2xl break-words capitalize text-darkGray mt-4 cursor-pointer"
                onClick={() => navigate("/projects/" + previousProject.id)}
              >
                {previousProject.name}
              </h2>
              <p
                className="public-sans font-normal text-base text-darkGray opacity-50 cursor-pointer"
                onClick={() => navigate("/projects/" + previousProject.id)}
              >
                Previous Project
              </p>
            </div>
          ) : null}
        </div>
        <div className="w-1/2 flex items-start justify-end py-6">
          {nextProject ? (
            <div className="w-full flex flex-col items-end">
              <RightArrow
                onClick={() => navigate("/projects/" + nextProject.id)}
              />
              <h2
                className="Ibarra font-normal text-2xl break-words capitalize text-darkGray mt-4 cursor-pointer"
                onClick={() => navigate("/projects/" + nextProject.id)}
              >
                {nextProject.name}
              </h2>
              <p
                className="public-sans font-normal text-base text-darkGray opacity-50 cursor-pointer"
                onClick={() => navigate("/projects/" + nextProject.id)}
              >
                Next Project
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full pt-10"></div>
  );
};

export default Project;
