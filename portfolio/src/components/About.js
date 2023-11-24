import React from "react";

export default function About() {
 return (
   <section id="about">
     <div className="about-grid">
      <div>
        <img src="images/julia-sm.png" alt="Caricature of Julia"
          className = "about-img"
        />
      </div>
       <div >
       {/* this component has a picture of me and a little blurb.  */}
       <h2 className="about-h2">About me</h2>
         <p className="about-info">
           I could've just Lorem Ipsum-ed this whole thing, but I figure if
           you're here, you wanna know more about me. I believe that nachos are
           the food of the gods, Han totally shot first but we deny it because
           we insist our heroes be better than us, there is a place reserved in
           Heaven for the makers of Dance Central and that nobody really likes
           to read introductions. <br />
           <br />
           Here's what you really want to know: I'm in school to learn how to
           program and I am adoring this journey. I'm excited about the
           possibilities to create anything I can imagine. Check out my favorite
           projects in the gallery below.
         </p>
         
       </div>
       
     </div>
   </section>
 )
}



