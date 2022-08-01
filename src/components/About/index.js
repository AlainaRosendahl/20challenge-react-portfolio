import React from 'react'
import personalImage from "../../assets/cover/IMG_6180.JPG";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">I'm Alaina Rosendahl.</h1>
      <img src={personalImage} className="my-2" style={{ width: "15%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a Kansas City based Full Stack Web Developer. I am a junior web developer with good knowledge of front-end and back-end techniques.
      </p>
      </div>
    </section>
  )
}

export default About