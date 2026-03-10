import "../src/App.css";
import "virtual:uno.css";
import { createSignal } from "solid-js";
// 1. PROJECT DATA
const projectsData = [
  {
    name: "Predictive Education Advisory System",
    description:
      "Develop an application using Python Flask to train AI system to help the student to choose the right major in the university.",
    scope: "UIT Data Challenge 2024",
    role: "Frontend developer",
    techniques: "Python, Flask, React.js, Foundation Sites",
    status: "Finished",
    linkText: "GitHub",
    linkUrl: "https://github.com/Schrrodinger/PEAS-Predictive-Educational-Advisory-System", // Replace with actual link
  },
  {
    name: "Simple Pokémon game",
    description:
      "Develop Pokémon database using crawling techniques and PokeApi. Game using Golang",
    scope: "School project",
    role: "Backend developer",
    techniques: "Golang (mutex, channel, go routine), Playwright, Termbox",
    status: "Finished",
    linkText: "GitHub",
    linkUrl: "https://github.com/PhungNghiaMa/NetCentric-Project",
  },
  {
    name: "Content Management System",
    description:
      "Develop an web application to write content as form of Markdown",
    scope: "School project",
    role: "Backend developer",
    techniques: "Golang, Gin, GORM",
    status: "Finished",
    linkText: "GitHub",
    linkUrl: "https://github.com/quang-pham-1109/content-management-system",
  },
  {
    name: "Java Chess Game",
    description:
      "Develop a simple chess by applying design pattern and OOP principles using Java",
    scope: "School project",
    role: "Backend developer",
    techniques: "Java, Design pattern (Decorator), Java Swing",
    status: "Finished",
    linkText: "Github",
    linkUrl: "https://github.com/nguyenhuybao1108/dsaProject2023",
  },
  {
    name: "Social Media",
    description:
      "Develop a social media with AI integration for live translating and enhance image in real time",
    scope: "Personal project",
    role: "Fullstack developer",
    techniques:
      "Wails3 , Golang , Solid.JS , PostgreSQL , ScyllaDB , Neptune , DragonFly , Pinecone , Websocket , WebRTC ",
    status: "In progress",
    linkText: "Nil",
    linkUrl: "#",
  },
  {
    name: "Hat Boi 3D Virtual Museum",
    description:
      "Develop a virtual museum on web platform that users can visit and explore the museum using 3D model, even with low-tier device",
    scope: "Thesis",
    role: "Fullstack developer",
    techniques:
      "Golang , Vanilla ,  Three.js, Blender, PostgreSQL , Pinata Cloud , WebRTC [ SFU ] , Websocket",
    status: "Finished",
    linkText: "GitHub",
    linkUrl: "https://github.com/PhungNghiaMa/Official_Thesis",
  },
];

// Helper to color the status column
const getStatusColorClass = (status) => {
  if (status === "Finished") return "text-green-600";
  if (status === "In progress") return "text-yellow-600 font-semibold";
  return "text-gray-600";
};

// HELPER COMPONENTS

// 1. Mobile "Card" (One item per swipe)
// 1. Mobile "Card" (One item per swipe)
const ProjectCard = (props) => (
  <div class="w-full h-full shrink-0 snap-center px-4 box-border">
    <div class="bg-white rounded-xl p-6 shadow-lg border border-orange-500 h-full flex flex-col justify-start">
      <h3 class="text-xl font-black italic mb-4 break-words leading-tight uppercase">
        {props.project.name}
      </h3>

      <p class="text-sm text-gray-600 mb-6 text-center leading-relaxed">
        {props.project.description}
      </p>

      <div class="space-y-2 border-t border-orange-500 pt-4 mt-auto">
        <div class="grid grid-cols-[80px_1fr] gap-2 items-start text-[11px]">
          <span class="font-bold uppercase text-gray-400">Scope:</span>
          <span class="text-gray-900">{props.project.scope}</span>
        </div>
        <div class="grid grid-cols-[80px_1fr] gap-2 items-start text-[11px]">
          <span class="font-bold uppercase text-gray-400">Role:</span>
          <span class="text-gray-900">{props.project.role}</span>
        </div>
        <div class="grid grid-cols-[80px_1fr] gap-2 items-start text-[11px]">
          <span class="font-bold uppercase text-gray-400">Tech:</span>
          <span class="text-gray-900 break-words">
            {props.project.techniques}
          </span>
        </div>
        <div class="grid grid-cols-[80px_1fr] gap-2 items-start text-[11px]">
          <span class="font-bold uppercase text-gray-400">Status:</span>
          <span class={`${getStatusColorClass(props.project.status)}`}>
            {props.project.status}
          </span>
        </div>
        <div class="grid grid-cols-[80px_1fr] gap-2 items-start text-[11px]">
          <span class="font-bold uppercase text-gray-400">Link:</span>
          <a href={props.project.linkUrl} class="text-blue-600 underline">
            {props.project.linkText}
          </a>
        </div>
      </div>
    </div>
  </div>
);

// 2. MAIN COMPONENT
export default function Projects() {
  const [activeIndex, setActiveIndex] = createSignal(0);
  let scrollContainer;

  const handleScroll = () => {
    if (scrollContainer) {
      const scrollLeft = scrollContainer.scrollLeft;
      const width = scrollContainer.offsetWidth;
      // Calculate the current active index based on scroll position
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };
  return (
    <section class="Container snap-start p-4 md:p-0">
      <h1 class="text-4xl font-black uppercase italic mb-10 mt-10 md:mt-4 md:px-10 p-6">
        Projects
      </h1>

      {/* --- DESKTOP VIEW (≥md) --- */}
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full text-xs text-left border-collapse border border-gray-500 overflow-y-auto">
          <thead class="bg-gray-50 uppercase font-medium text-gray-700 text-center">
            <tr>
              <th class="px-5 py-4 border border-gray-500 w-[15%]">Name</th>
              <th class="px-5 py-4 border border-gray-500 w-[30%]">
                Description
              </th>
              <th class="px-5 py-4 border-gray-500 w-[10%]">
                Project Scope
              </th>
              <th class="px-5 py-4 border border-gray-500 w-[10%]">Role</th>
              <th class="px-5 py-4 border border-gray-500 w-[20%]">
                Techniques
              </th>
              <th class="px-5 py-4 border border-gray-500 w-[8%]">Status</th>
              <th class="px-5 py-4 border border-gray-500 w-[7%]">Link</th>
            </tr>
          </thead>
          <tbody class="text-gray-900 leading-relaxed text-center">
            {projectsData.map((project, index) => (
              <tr class="hover:bg-gray-50">
                <td class="px-5 py-4 border border-gray-500 font-semibold italic align-middle break-words">
                  {project.name}
                </td>
                <td class="px-5 py-4 border border-gray-500 align-middle text-center break-words">
                  {project.description}
                </td>
                <td class="px-5 py-4 border border-gray-500 align-middle whitespace-nowrap break-words">
                  {project.scope}
                </td>
                <td class="px-5 py-4 border border-gray-500 align-middle whitespace-nowrap break-words">
                  {project.role}
                </td>
                <td class="px-5 py-4 border border-gray-500 align-middle break-words">
                  {project.techniques}
                </td>
                <td
                  class={`px-5 py-4 border border-gray-500 align-middle font-medium break-words ${getStatusColorClass(project.status)}`}
                >
                  {project.status}
                </td>
                <td class="px-5 py-4 border border-gray-500 align-middle break-words">
                  <a
                    href={project.linkUrl}
                    class="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MOBILE VIEW (<md) --- */}
      <div class="md:hidden relative">
        <div
          ref={scrollContainer}
          onScroll={handleScroll}
          class="flex flex-row overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
          style={{ "scroll-behavior": "smooth", "scrollbar-width": "none" }}
        >
          {projectsData.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>

        {/* Dynamic Pagination Indicators */}
        <div class="flex justify-center gap-2 mt-2 pb-6">
          {projectsData.map((_, index) => (
            <div
              class={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex() === index ? "bg-black scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
