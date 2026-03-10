import "../src/App.css";
function Introduction() {
  return (
    /* md:grid-cols-2: Back to normal 2-column grid on desktop
      flex flex-row: Force a single line on mobile
      overflow-x-auto: Allow horizontal scrolling
      snap-x snap-mandatory: Makes it 'click' into place when you swipe
    */
    <div class="Container h-full snap-start overflow-y-hidden flex flex-row md:gap-4 md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-0 md:gap-24">
      {/* SECTION 1: ABOUT ME */}
      <section class="w-screen shrink-0 md:w-auto md:shrink snap-center p-6 md:px-10 flex flex-col justify-start box-border">
        <h2 class="text-3xl font-black uppercase italic mb-2">About Me</h2>
        <p class="text-gray-500 italic text-sm mb-4">hello, there</p>

        {/* 2. Removed flex flex-wrap here; standard block display is better for text wrapping */}
        <div class="text-sm leading-relaxed space-y-4">
          <p class="text-justify break-words">
            as a passionate Computer Science student and fullstack development
            intern with a strong foundation in backend engineering. I’ve worked
            extensively with languages like Go, Java, Node.js, and Python to
            build APIs, implement backend logic, and design robust databases
            using PostgreSQL, MySQL, and Microsoft SQL Server. On the frontend,
            I’m comfortable crafting clean interfaces with React.js, Next.js,
            and Tailwind CSS.
          </p>
          <p class="text-justify break-words">
            while I specialize in backend development, I enjoy touching every
            layer of the stack and constantly seek to expand my skill set. What
            sets me apart is my unshakable determination—when I hit a roadblock,
            I don’t walk away; I dig deeper until I find a solution. I thrive in
            team environments thanks to my enthusiasm for collaboration, and I’m
            always eager to learn something new, no matter how challenging it
            may be.
          </p>
        </div>

        <div class="mt-auto pt-10 text-center text-xs text-gray-400 md:hidden italic">
          Swipe to see Education →
        </div>
      </section>
      {/* SECTION 2: EDUCATION */}
      <section class="w-screen shrink-0 md:w-full md:shrink snap-start p-6 md:px-10 box-border">
        <h2 class="text-3xl font-black uppercase italic mb-2">Education</h2>
        <p class="text-xs text-gray-400 italic mb-1">[ Undergraduate ]</p>
        <h3 class="font-bold text-sm">Bachelor of Computer Science</h3>
        <p class="text-xs text-gray-600">
          International University - Ho Chi Minh National University (HCMIU)
        </p>
        <p class="text-xs text-gray-400">Sep 2021 - Present</p>
      </section>
      {/* SECTION 3: EXPERIENCE */}
      <section class="w-screen shrink-0 md:w-auto md:shrink-1 snap-center p-6 md:px-10 border-l border-gray-100 md:border-0 box-border">
        <h2 class="text-3xl font-black uppercase italic mb-6">Experience</h2>

        <div class="space-y-6">
          {/* Role 1 */}
          <div>
            <h3 class="font-bold text-sm leading-tight break-words">
              UIT Data Challenge - [Frontend Developer]
            </h3>
            <p class="text-xs text-gray-400 mt-1">2024</p>
          </div>

          {/* Role 2 */}
          <div>
            <h3 class="font-bold text-sm leading-tight break-words">
              IT Hackathon: SOLANA PRAGMATIC - [Backend Developer]
            </h3>
            <p class="text-xs text-gray-400 mt-1">2025</p>
          </div>
        </div>

        {/* Optional: Add a swipe indicator here too if it's the middle slide */}
        <div class="mt-auto pt-10 text-center text-xs text-gray-400 md:hidden italic">
          ← Swipe for Education | Swipe for Skills →
        </div>
      </section>
      {/* SECTION 4: SKILLS */}
      <section class="w-screen shrink-0 md:w-full md:shrink snap-start p-6 md:px-10 box-border">
        <h2 class="text-3xl font-black uppercase italic mb-6">Skills</h2>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold border-b border-black mb-2 text-sm">
              Language
            </h4>
            <ul class="text-xs space-y-1 text-gray-600">
              <li>Golang</li>
              <li>Java</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold border-b border-black mb-2 text-sm">
              Frameworks
            </h4>
            <ul class="text-xs space-y-1 text-gray-600">
              <li>Gin, Playwright</li>
              <li>Spring Boot</li>
              <li>Express.js, Nest.js , React , Solid.js</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
