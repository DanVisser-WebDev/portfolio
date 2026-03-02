const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="m-6 w-180 h-80 bg-white rounded-2xl shadow-lg overflow-hidden flex">
      {/* Right side — Image */}
      <div className="w-1/2 h-full">
        <img
          src={image}
          alt="Card visual"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Left side — Text */}
      <div className="w-1/2 p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-2 line-clamp-1">{title}</h2>

        <p className="text-gray-700 text-sm leading-relaxed line-clamp-5">
          {description}
        </p>

        <div className="mt-auto">
          <a
            target="_blank"
            href={link}
            className="rounded-2xl mt-auto bg-brand-green text-white px-4 py-2 hover:bg-brand-light-green transition cursor-pointer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
