const experiences = [
  {
    role: "Technology Intern",
    company: "Santander Bank",
    duration: "Jun 2024 – Aug 2024",
    location: "Boston, MA",
    description:
      "Spearheaded automation of ETL processes using SQL, SAS, and Python, improving operational efficiency by up to 400% and enhancing data validation controls. New running controls used by over 45 team members.\n" +
      "Facilitated collaboration between ETL and Oracle teams by translating business requirements into technical specifications.\n" +
      "Proactively engaged stakeholders to refine data quality assurance processes, strengthening cross-functional team communication, while supporting regulatory reporting for critical frameworks (e.g., CCAR, CECL)",
    skills: [
      "SQL",
      "Python",
      "SAS",
      "Oracle Database",
      "Communication",
      "Data Automation",
      "Regulatory Reporting",
    ],
    logo: "/public/santander_bank_na_logo.jpeg",
  },
  {
    company: "University of Massachusetts Amherst",
    role: "Admissions Staff",
    duration: "Sept 2023 – Jul 2024",
    location: "Amherst, MA · On-site",
    description:
      "Collectively analyze 100,000+ transcripts and re-calculate the GPA of prospective UMass students using MBHE standards.\n" +
      "Reported directly to the Senior Assistant Director of Admissions.",
    skills: ["Employee Training", "Attention to Detail"],
    logo: "/public/umassamherst_logo.jpeg",
  },
  {
    company: "GoApptiv",
    role: "Software Engineer Intern",
    duration: "June 2023 – Aug 2023",
    location: "Mumbai, India · Hybrid",
    description:
      "Developed responsive UI using ReactJS, HTML, and CSS. Optimized data visualization with dynamic pivot tables, reducing HTTP requests and improving web application load speed by 30%.\n" +
      "Implemented RESTful APIs, designed structured API routes and handled data serialization into JSON format, ensuring seamless data flow between frontend and backend systems",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "UI Design",
      "Software Development",
    ],
    logo: "/public/goapptiv_private_limited_logo.jpeg",
  },
  {
    company: "Spocto",
    role: "Data Analyst Intern",
    duration: "June 2021 – Aug 2021",
    location: "Mumbai, India",
    description:
      "Led the development of predictive loan eligibility models using TensorFlow and PyTorch, boosting decision-making accuracy for credit assessments. Engaged with business users to interpret data visualization insights.",
    skills: ["Data Analysis", "Python", "Data Visualization"],
    logo: "/public/spocto_logo.jpeg",
  },
];

const FeaturedExp = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 bg-gray-100 dark:bg-gray-950">
      {/* Section Title */}
      <div className="text-left mb-8">
        <h2 className="text-blue-400 text-4xl font-semibold tracking-widest drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
          PROFESSIONAL EXPERIENCE
        </h2>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg group transition-all duration-300 hover:shadow-cyan-400/40"
          >
            <div className="flex items-center mb-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.company} &middot; {exp.duration}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
              {exp.description.split("\n").map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2 py-1 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedExp;
