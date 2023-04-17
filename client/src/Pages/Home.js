import React from 'react'

const Home = () => {
  
const skills = [
'JavaScript', 'HTML', 'CSS', 'Express', 'Node', 'React', 'PostgreSql', 'MongoDb', 'Mongoose', 'Python', 'Flask', 'Vue', 'Sequelize'
]

const projects = [{name: 'Synapse', description: 'Fully AI ran Social Media built with the PERN stack. Using the openAi api, each post is created with a response from DallE-2 and Chatgpt, specifically prompted to create a short instagram caption about whatever topic given.  After reviewing caption and photo, post it to your feed for your followers to see.', img: 'https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/robot-icon.png'}, {name: 'Sportify', description: 'Full stack reddit clone, specifically for different sports leagues around the world.  Built with a team of two other software engineers using the Pern stack.  After logging to your account, discover posts from other users or make your own in the league of your choosing.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQGUHdbi8GkiDeRm956A-_d4unJaIW4RqQAUd818skA&usqp=CAU&ec=48600112'}, {name: 'Plant Pal', description: 'Full stack Plant database, with plants split by native region.  Built with the MERN stack.  Find your favorite house plants to see the best grow conditions and add them to your own personal garden.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TTdRv3g3eYk-k0WoQd9bsFRSti4LEYsAlkCqKxTYTA&usqp=CAU&ec=48600112'}]
  

  const allSkills = skills.map((skill, idx) => (
    <div key={idx}>
        <h4 className='skill'>{skill}</h4>
    </div>
  ))

  const allProjects = projects.map((project, idx) => (
    <div key={idx} className='project'>
        <h4>{project.name}</h4>
        <img src={project.img} className='pjct-icon'/>
        <p>{project.description}</p>
        
    </div>
  ))
    return (
    <div>
        <section className='img-cnt'>
            <img src='https://media.licdn.com/dms/image/D5635AQGp8Glb3WDLkw/profile-framedphoto-shrink_200_200/0/1680809641514?e=1681772400&v=beta&t=ksxJ9ldobvVKXODnycJhxrBL-rwH7P3Mr3Fzs-8UnCE'/>
        </section>
        <section className='title-cnt'>
        <h1 className='title'>
        Arthur Pate | Software Developer
        </h1>
        </section>
        <section className='contact-cnt'>
            
            <div className='icon-cnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='icon-img'/> 
            <img src='https://cdn.iconscout.com/icon/free/png-256/linkedin-67-433325.png?f=avif&w=128' className='icon-img'/>
            <img src='https://cdn-icons-png.flaticon.com/512/3178/3178158.png' className='icon-img'/>
            </div>
        </section>
        
        <section>
            <div className='skills-title-cnt'>
                <h1 className='skills-title'>Skills</h1>
                </div>
            
                <div className='skills-cnt'>
                {allSkills}
                </div>
        </section>
        <section>
        
            <h1>Projects</h1>
            
            <div className='pjct-cnt'>
                {allProjects}
            </div>
            
        </section>
    </div>
  )
}

export default Home