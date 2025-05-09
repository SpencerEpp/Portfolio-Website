import { useState } from "react";
import { projects } from "../projects";

export default function MoreProjects() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState([]);

  const allTechs = Array.from(new Set(projects.flatMap(p => p.skills))).sort();

  const toggleFilter = (tech) => {
    setFilters((prev) =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = projects.filter(p => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesTech = filters.length === 0 || filters.every(f => p.skills.includes(f));
    return matchesQuery && matchesTech;
  });

  return (
    <main className="min-h-screen bg-[#181922] p-8 text-white h-screen overflow-y-auto hidding-scroll">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search projects by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 mb-6 rounded-md border border-gray-700 bg-[#181922] focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
        />

        {/* Search Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {allTechs.map((tech, idx) => (
            <button
              key={idx}
              onClick={() => toggleFilter(tech)}
              className={`text-sm px-3 py-1 rounded border border-gray-500 hover:bg-blue-600 transition ${
                filters.includes(tech) ? "bg-blue-500 text-white" : "bg-transparent text-gray-300"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProjects.map((proj, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-700 bg-card bg-opacity-10 p-4 flex flex-col justify-between shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="font-bold text-lg text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {proj.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-gray-700 text-blue-300 text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:text-blue-300"
                  >
                    Live Site
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-gray-300"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 w-full flex flex-col justify-end max-w-7xl mx-auto">
        <hr className="w-full border-t border-gray-300/20 my-4" />
        <div className="w-full flex flex-row justify-between items-center moveUpAni bottom-0">
          <div className="flex">
            <span>
              <img src="/icons/f1.svg" className="w-28 h-12" />
            </span>
          </div>
          {/* Icons removed as requested */}
        </div>
      </div>
    </main>
  );
}
