import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {


const skills = [
'JavaScript', 'HTML', 'CSS', 'Express', 'Node', 'React', 'PostgreSql', 'MongoDb', 'Mongoose', 'Python', 'Flask', 'Vue', 'Sequelize'
]
const techs = ['VSCode', 'CLI', 'GitHub', 'Lucid Charts', 'Figma', 'Trello' ]

const future = ['C#', 'ASP.net', 'C++', 'Java']

const projects = [{name: 'Synapse', description: 'Fully AI ran Social Media built with the PERN stack. Using the openAi api, each post is created with a response from DallE-2 and Chatgpt, specifically prompted to create a short instagram caption about whatever topic given.  After reviewing caption and photo, post it to your feed for your followers to see.', img: 'https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/robot-icon.png',link: 'https://prompt-client.vercel.app/login', backend: 'https://github.com/ap2121/prompt-api', client: 'https://github.com/ap2121/prompt-client' }, {name: 'Sportify', description: 'Full stack reddit clone, specifically for different sports leagues around the world.  Built with a team of two other software engineers using the Pern stack.  After logging to your account, discover posts from other users or make your own in the league of your choosing.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQGUHdbi8GkiDeRm956A-_d4unJaIW4RqQAUd818skA&usqp=CAU&ec=48600112', link: 'https://mysportify.vercel.app/', backend: 'https://github.com/ap2121/Sportify-Api', client: 'https://github.com/ap2121/Sportify-Frontend'}, {name: 'Plant Pal', description: 'Full stack Plant database, with plants split by native region.  Built with the MERN stack.  Find your favorite house plants to see the best grow conditions and add them to your own personal garden.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TTdRv3g3eYk-k0WoQd9bsFRSti4LEYsAlkCqKxTYTA&usqp=CAU&ec=48600112', link: 'https://plant-pal.herokuapp.com/', backend: 'https://github.com/ap2121/Plant-Finder'}]
  

  const allSkills = skills.map((skill, idx) => (
    <div key={idx}>
        <h4 className='skill'>{skill}</h4>
    </div>
  ))

  const allProjects = projects.map((project, idx) => (
    <div key={idx}>
    <div  className='project'>
        <h4 className='pjct-name'>{project.name}</h4>
        <Link to={project.link} target='_blank'>
        <img src={project.img} className='pjct-icon'/>
        </Link>
        <p className='pjct-desc'>{project.description}</p>
       
  
        </div>
        <div className='pjct-btn-cnt'>
        <Link to={project.link} target='_blank'>
        <button className='btns'>Deployed</button>
        </Link>
        <Link to={project.backend} target='_blank'>
        <button className='btns'>Backend Repo</button>
        </Link>
        <Link to={project.client} target='_blank'>
        <button className='btns'>Frontend Repo</button>
        </Link>
        </div>
    </div>
  ))

  const allTechs = techs.map((tech, idx) => (
    <div className={idx}>
      <h4 className='skill'>
        {tech}
      </h4>
    </div>
  ))

  const allFuture = future.map((f,idx) => (
    <div id={idx}>
      <h4 className='skill'>{f}</h4>
    </div>
  ))
    return (
    <div>
       <div className='nav-cnt'>

      <p>Projects</p>
    <p>Contact</p>
    </div>
        <div className='title-cnt'>
        <h1 className='title'>
        Arthur Pate
        </h1>
        </div>
        <div className='bio-cnt'>
          <p>Seattle based Software Engineer, lover of problem solving and big thinker</p>
          
        </div>
        <div className='bio-cnt2'>
          <p>Come and take a look!</p>
        </div>
        
            
            {/* <div className='icon-cnt'>
            <Link to={'https://github.com/ap2121'} target='_blank'>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='icon-img'/> 
            </Link>
            <Link to={'https://www.linkedin.com/in/arthurpate21/'} target='_blank'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/linkedin-67-433325.png?f=avif&w=128' className='icon-img'/>
            </Link>
            
            
            
            </div> */}
       
        
        
            <div className='skills-title-cnt'>
                <h1 className='skills-title'>Scroll to see  my skills!</h1>
                </div>
                
                <div className='full-skill-cnt'>
                <div className='big-skills-cnt'>
                
                <div className='skills-cnt'>
                <h1>Programming Languages</h1>
                {allSkills}
                <h1>Programming Languages</h1>
                </div>
                </div>
              <div className='big-skills-cnt'>
              <div className='skills-cnt'>
                <h1>Software/Technology</h1>
                {allTechs}
                <h1>Software/Technology</h1>
              </div>
              </div>

              <div className='big-skills-cnt'>
                <div className='skills-cnt'>
                  <h1>Currently Learning</h1>
                  {allFuture}
                  <h1>Currently Learning</h1>
                </div>
              </div>
              </div>
            <div className='pjct-title-cnt'>
            <h1 className='pjct-title'>Projects</h1>
            </div>
           <div className='big-pjct-cnt'>
            <div className='pjct-cnt'>
                {allProjects}
            
            </div>
            </div>
       
    </div>
  )
}

export default Home