import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h2 className="resume">Resume</h2>
        <hr></hr>
       
           

        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                <h2>Alaina Rosendahl</h2>
            <ul>
                    <li>Core competencies in full-stack web development.</li>
                    <li>Self-driven team player with strengths in communication and developing interpersonal relationships.</li>
                    <li>Possess excellent planning, organization, time management and decision-making skills.</li>
                </ul>
        

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/alaina-rosendahl-181b85236/">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="inkedIn"/></a>
                </p>
               
               <a class="link">Download Resume</a>
               
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div>
                <h2>Proficiencies</h2>
                <p>HTML, CSS (Bootstrap, Foundation, HandleBars), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
                <p>Node.js, Express.js, SQL, Sequelize, NoSQL, APIs, Templating</p>
                
            </div>
    
            
        </div>
</section>
);
}

export default Resume;