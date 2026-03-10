import { A } from "@solidjs/router";
import "./App.css";

function App(props) {
  return (
    // Changed: Added h-screen, snap-y, and snap-mandatory
    <div class="w-full h-full text-gray-900 font-zilla overflow-y-auto overflow-x-clip snap-y snap-mandatory scroll-smooth">
      {/* Header Section */}
      {/* Note: In a full-page snap layout, you typically want the header fixed or 
          inside the first section so it doesn't "float" awkwardly between snaps */}
      <header class="max-h-fit flex justify-between items-center w-full py-4 flex-col md:flex-row gap-2 sm:flex-row justify-around items-center snap-start">
        <h1 class="text-center md:text-start w-full md:w-2/12 bg font-bold text-base uppercase tracking-tighter md:text-base">
          Mã Phùng Nghĩa
        </h1>
        <div class="w-full md:hidden flex justify-center items-center border-none ">
          <hr class="w-full h-0 border rgb(218 150 94)"></hr>
        </div>
        <div class="w-8/12 min-w-2xl h-auto flex flex-col-reverse md:flex-row items-center gap-2">
          <nav class="w-1/2 -mt-2 md:mt-0 py-1 flex gap-10 text-xs text-sm font-medium uppercase tracking-wide items-center justify-center">
            <A href="/" activeClass="border-b-2 border-black">Introduction</A>
            <A href="/projects" activeClass="border-b-2 border-black">Projects</A>
            <A href="/contacts" activeClass="border-b-2 border-black">Contacts</A>
          </nav>
          <div class="w-full -mt-1 md:hidden">
            <hr class="w-full h-0 border border-gray-400"></hr>
          </div>
          <div class="w-1/2 flex text-xs md:text-base md:text-xs  justify-center items-center text-sm font-semibold uppercase tracking-wide">
            Intern Fullstack
          </div>
        </div>
      </header>

      <hr class="w-full -mt-1 border-2 border-orange-500" />

      {/* Main Content Area: Content is injected here */}
      <main class="w-full">
        {props.children}
      </main>
    </div>
  );
}

export default App;