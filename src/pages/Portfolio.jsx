import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <div className="w-full pt-10 flex flex-col gap-y-[72px]">
      {projects.length > 0
        ? projects.map((project, index) => {
            const display =
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";

            return (
              <div
                className={
                  "w-full flex flex-col gap-y-8 md:gap-x-[69px] md:items-center " +
                  display
                }
                key={project.name}
              >
                <img
                  src={project.poster}
                  alt="poster"
                  className="w-full h-[311px] object-cover md:w-[339px] xl:w-[540px] xl:h-[500px]"
                />
                <div className="w-full md:flex md:flex-col md:justify-between md:h-[311px] xl:h-[500px]">
                  <div className="w-full h-[1px] bg-darkGray opacity-[15%]"></div>
                  <h2 className="mt-6 Ibarra font-normal text-[40px] leading-[42px] break-words capitalize">
                    {project.name}
                  </h2>
                  <p className="w-full public-sans font-normal text-[15px] leading-[30px] text-darkGray opacity-80 h-fit mb-6">
                    {project.description}
                  </p>
                  <Link
                    to={"/projects/" + project.id}
                    className="decoration-none public-sans w-[176px] font-normal text-xs py-4 px-8 text-center border-[1px] border-darkGray"
                  >
                    VIEW PROJECT
                  </Link>
                  <div className="w-full h-[1px] mt-8 bg-darkGray opacity-[15%]"></div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Portfolio;
