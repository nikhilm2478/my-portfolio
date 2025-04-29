import FeaturedProjectCard from "./FeaturedProjectCard";

const FeaturedProject = () => {
  const projects = [
    {
      title: "Personal Website",
      description:
        "A personal website built with React and Tailwind CSS, which you happen to be on right now!",
      tags: ["React", "Next.js", "Tailwind", "Vercel"],
      link: "#",
      image: "/IMG_2549.jpeg",
    },
    {
      title: "Quantum Walk Visualizer",
      description:
        "Collaborated with a PhD mentor and a team of peers to develop quantum walk algorithms using Qiskit, transforming complex datasets and creating engaging visualizations for democratizing quantum computing insights.",
      tags: ["Python", "Pandas", "Qiskit", "Research"],
      link: "https://ibb.co/Kh4ZrmT",
      image: "/karlis-reimanis-Y31Z6Mf7rys-unsplash.jpg",
    },
    {
      title: "Full Stack Recipe Generator",
      description:
        "Led the development of a full-stack web app for dynamic recipe generation based on user-provided ingredients. Built with startup dev principles and Agile methodologies.",
      tags: ["React", "Next.js", "PostgreSQL", "Flask", "Vercel"],
      link: "https://cs-320-group-7-rose.vercel.app/",
      image: "/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
    },
    {
      title: "Big Pharma & The Suburban Shift",
      description:
        "Analyzed commercial real estate and external datasets to uncover leasing trends. Built a regression model (R² = 0.61) to support findings. Delivered actionable insights for real estate stakeholders by identifying key leasing drivers, helping explain a 3500% surge in suburban pharma leasing.",
      tags: ["Python", "Pandas", "Tableu"],
      link: "https://publuu.com/flip-book/860773/1886466",
      image: "/pexels-pixabay-302769.jpg",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 bg-gray-100 dark:bg-gray-950">
      {/* Title Above Grid */}
      <div className="text-left mb-8">
        <h2 className="text-blue-400 text-4xl font-semibold tracking-widest drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
          FEATURED PROJECTS
        </h2>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((proj, idx) => (
          <FeaturedProjectCard
            key={idx}
            title={proj.title}
            description={proj.description}
            tags={proj.tags}
            link={proj.link}
            image={proj.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProject;
