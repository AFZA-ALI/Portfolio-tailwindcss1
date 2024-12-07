import Image from "next/image";
import { MapPin, Dot, Github, Linkedin, Instagram  } from 'lucide-react';





function Hero(){
    return(
        <main className="w-full h-full flex justify-center items-center bg-pink-800 pt-5">
            <div className="flex w-full md:w-[80%] h-full flex-col md:flex-row justify-between items-center">
                {/* left */}
                <div className="w-full md:w-[50%] pl-3 pr-3">
                <Image src={"/profile.jpg"}
                width={100}
                height={100}
                alt="hero"
                className="w-[300px] h-[300px]"
                ></Image>
                </div>
                {/* right */}
                <div className="w-full p-5 md:w-[80%] space-y-5"> 
                 <h1 className="text-4xl text-white">Hi, I&apos;m Syeda</h1>
                 <p className="text-white font-semibold">I&apos;m Frontend Developer and UI/UX Enthusiast with a passion for crafting modern responsive and user-centric web experiences.With a strong foundation in both design and development.However, my passion for technology and creativity led  to witch paths.
        Passionate about Technology and constantly learning new skills to stay up-to-date with the latest innovation.
        I&apos;m currently pursuing a GIAIC Engineering Diploma and constantly expanding my knowledge in Web Development.</p>
                
                <div>
                    <p className="flex text-white font-semibold"><MapPin />Karachi, Pakistan</p>
                    <p className="flex text-white font-semibold"><Dot className="text-slate-900"/>Available for New Projects</p>
                </div>
                <div className="flex space-x-3">
                <Github className="text-gray-800"/> 
                <Linkedin className="text-blue-700"/>
                <Instagram className="text-purple-800"/>
                </div>
                </div>
            </div>
        </main>
    )
}
export default Hero;