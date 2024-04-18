import React, { ReactNode } from "react";
import fountain from "../assets/fountain.jpeg";
import navypier from "../assets/navypier.jpeg";
import grafitti from "../assets/grafitti.jpeg";
import searstower from "../assets/searstower.jpeg";
import "./slideshow.css";
import { slideRoater} from "../libs/slideshowAutoNav";




function SlideShow(): ReactNode {

   let counter=1
 
   setInterval (function(){
      
      // here we put "!" to correct the null error after the object
      const slideElm=document.getElementById('radio'+ counter)! as HTMLInputElement;
      slideElm.checked = true;
      counter++;
      if(counter> 4){
         counter=1
      }
   },4000)

   return (
      <>
         <div className="slideshow">
            {/* Slider Over Arching Container **/}
            <div className="slider">
               {/* This container div will hold all of the contents for the slides **/}
               <div className="slides">

                  {/* Here I am defining my Slideshow radio buttons for nav **/}
                  <input type="radio" name="radio-btn" id="radio1" />
                  <input type="radio" name="radio-btn" id="radio2" />
                  <input type="radio" name="radio-btn" id="radio3" />
                  <input type="radio" name="radio-btn" id="radio4" />

                  {/* Below I am defining my image slides. **/}
                  <div className="slide first">
                     <img src={fountain} alt="the-bean" />
                  </div>

                  <div className="slide">
                     <img src={navypier} alt="navypier" />
                  </div>

                  <div className="slide">
                     <img src={grafitti} alt="painting-in-bronzeville" />
                  </div>

                  <div className="slide">
                     <img src={searstower} alt="searstower" />
                  </div>
                  {/* End of Image Slides **/}

                  {/* This container will handle the auto navigation of the radio buttons **/}
                  <div className="navigation-auto">
                     <div className="auto-btn1"></div>
                     <div className="auto-btn2"></div>
                     <div className="auto-btn3"></div>
                     <div className="auto-btn4"></div>
                  </div>

               </div>

               {/* This container will handle we I manual change the slides **/}
               <div className="navigation-manual">
                  <label htmlFor="radio1" className="manual-btn"></label>
                  <label htmlFor="radio2" className="manual-btn"></label>
                  <label htmlFor="radio3" className="manual-btn"></label>
                  <label htmlFor="radio4" className="manual-btn"></label>
               </div>
            </div>
                  
         </div>
      </>
   )
}


export default SlideShow;
