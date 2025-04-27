import React from "react";

interface FeaturedProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  tags,
  link,
  image,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-transparent hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/40 relative overflow-hidden cursor-pointer max-w-4xl mx-auto"
    >
      {/* Text section */}
      <div className="flex-1 text-left z-10 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300 ease-out">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Parallax Image */}
      <div className="ml-0 md:ml-6 mt-4 md:mt-0 w-full md:w-48 h-48 flex-shrink-0 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* LED Glow Ring */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-cyan-400 transition duration-300" />
    </a>
  );
};

export default FeaturedProjectCard;
