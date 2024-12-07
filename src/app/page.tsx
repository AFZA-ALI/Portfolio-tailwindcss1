

import About from "./about/page";
import Contact from "./contact/page";

import Home from "./home/page";
import Projects from "./projects/page";

function Homepage(){
  return(
    <div>
      <Home/>
      <About/>
      <Contact/>
      <Projects/>
    </div>
  )
}
export default Homepage;