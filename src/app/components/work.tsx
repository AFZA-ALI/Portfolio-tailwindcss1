import Image from "next/image";

function Work() {
  return (
    <main className="w-full h-full bg-pink-800 flex flex-col items-center mt-20 px-4 md:px-10">
      <div className="w-full md:w-[80%] flex flex-col items-center">
        {/* Top */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl text-black font-bold">My Projects</h1>
          <p className="mt-3 text-sm md:text-lg font-semibold text-white">
            The skills, tools, and technologies I am really good at:
          </p>
        </div>

        {/* Projects */}
        <div className="w-full flex flex-col gap-20 mt-8">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <Image
                src="/project2.jpg"
                width={250}
                height={200}
                className="w-full max-w-[400px] h-auto rounded-md"
                alt="E-Commerce Website"
              />
            </div>
            <div className="w-full md:w-[50%] space-y-4 mt-5 md:mt-0">
              <h1 className="text-2xl md:text-5xl font-bold hover:underline">E-Commerce Website</h1>
              <p className="text-white font-semibold text-sm md:text-2xl">
                A fast, responsive e-commerce site built with Next.js and Tailwind CSS, featuring category browsing
                and cart management. Powered by PostgreSQL, TypeScript, and Express.js for optimal performance.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">TypeScript</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">Next.js</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">Tailwind</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">HTML</div>
              </div>
            </div>
          </div>

          {/* Repeat Similar Structure for Project 2 and Project 3 */}
          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <Image
                src="/project3.jpg"
                width={250}
                height={200}
                className="w-full max-w-[400px] h-auto rounded-md"
                alt="Static Interactive Resume"
              />
            </div>
            <div className="w-full md:w-[50%] space-y-4 mt-5 md:mt-0">
              <h1 className="text-2xl md:text-5xl font-bold hover:underline">Static Interactive Resume</h1>
              <p className="text-white font-semibold text-sm md:text-2xl">
              A static interactive resume is a visually engaging, single-page resume with clickable sections, built with HTML, CSS, and JavaScript, without server-side interactivity.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">TypeScript</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">Next.js</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">Tailwind</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">HTML</div>
              </div>
            </div>
          </div>


             {/* Project 3 */}
             <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <Image
                src="/project1.jpg"
                width={250}
                height={200}
                className="w-full max-w-[400px] h-auto rounded-md"
                alt="Shareable Resume Builder"
              />
            </div>
            <div className="w-full md:w-[50%] space-y-4 mt-5 md:mt-0">
              <h1 className="text-2xl md:text-5xl font-bold hover:underline">Shareable Resume Builder</h1>
              <p className="text-white font-semibold text-sm md:text-2xl">
              A shareable resume builder is an online tool that allows users to create, customize, and download professional resumes, with options to easily share via a link or as a PDF.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">TypeScript</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">Next.js</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">Tailwind</div>
                <div className="bg-white px-3 py-2 rounded-xl text-sm font-bold">HTML</div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </main>
  );
}

export default Work;
