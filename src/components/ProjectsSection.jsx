import ProgressBar from "./ProgressBar";
import ProjectCard from "./ProjectCard";
import ProjectCardFlip from "./ProjectCardFlip";

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="flex justify-center pt-10 flex-col min-h-screen">
      <h1 className=" text-center text-4xl font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-gray-600 after:mx-auto after:mt-3 after:mb-3 after:rounded-full ">
        Projects
      </h1>

      <div className="min-h-screen flex flex-col items-center justify-center">
        <ProjectCard
          title={"Product Store"}
          description={
            "I created this project to learn the fundamentals of MERN (MongoDB, Express.js, React, Node.js). This project features a very basic online store with it’s own interactive backend."
          }
          image={
            "https://plus.unsplash.com/premium_photo-1684785617500-fb22234eeedd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link="https://mern-crash-course-pfxm.onrender.com"
          hideProgress={true}
        />
        <ProjectCardFlip
          title={"Real-Time Chat App"}
          description={
            "I created this project to learn and understand new libraries/packages for React. This project features a text messaging app designed to be used in real-time without the need for any refreshing."
          }
          image={
            "https://plus.unsplash.com/premium_photo-1721135016203-bd0530018fab?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          link={"https://real-time-chat-app-b55p.onrender.com"}
        />
        <ProjectCard
          title={"Spotify Clone"}
          description={
            "I am creating this project to learn more advanced features of React and learn new languages like TypeScript. This project, as the title suggests, will be an almost 1-to-1 copy of the popular music streaming service Spotify."
          }
          image={
            "https://images.unsplash.com/photo-1658489958427-325ded050829?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          hideButton={true}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
