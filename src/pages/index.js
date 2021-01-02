import * as React from "react"
import { Link } from "gatsby"
import imageStyles from "./image.module.css"
import Header from "./components/header.js"
import projectBackground from "./project.module.css"

// styles
const pageStyles = {
  color: "#232129",
  paddingLeft: "11%",
  paddingRight: "11%",
  paddingTop: "10%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "18px",
}
const headerStyles = {
  textDecoration: "underline",
  textDecorationColor: "#ffa500",
}
const subheaderStyles = {
  textDecoration: "underline",
  textDecorationColor: "#ffa500",
  paddingTop: "50px",
}
const projectStyles = {
  margin: "10px",
  float: "right",
  textDecoration: "none",
  color: "black",
  fontSize: "17px",
  marginLeft: "3%",
  marginRight: "3%",
  borderLeft: "solid #ffa500",
} 
const projectText = {
  margin: "1%",
  marginLeft: "1%",
  marginRight: "1%",
}
//data
const projects = [
    {
    'title': 'Esthetic',
    'link': "/projects/esthetic",
    'date': 'January 2021',
    'description': "A virtual closet mobile app. I'm working with a software engineer, Steve Docto, while taking on PM type responsibilities in the beginning, conducting user interviews to determine an idea and creating mockup screens. Now I'm working on ML algorithms to determine type of clothing and color."
    },
    {
      'title': 'Song Tags: An Alternative to Playlists',
      'link': "/projects/song-tags",
      'date' : 'September 2020',
      'description': "After lots of frustration in efficiently organizing my music, I conducted 10 user interviews to see how my friends organized playlists. I created four personas based off the data and propose a system of tagging songs that would benefit almost all music listeners."
    },
    {
      'title': "What Could 'Defund the Police' Look Like?",
      'link': "/projects/defund-the-police",
      'date': 'August 2020',
      'description': "The George Floyd Protests brought up a lot of rhetoric regarding defunding or even abolishing the police. I had a hard time imagining what that would look like as police is so ingrained in our society. So I analyzed what we really pay our police to do and explored where that money can be better spent."
    },
    {
      'title': "COVID's Impact on Mental Health",
      'link': "/projects/covid-mental-health",
      'date': 'June 2020',
      'description': "For Vassar's 2020 DataFest, I worked in a team of 5 peers to explore the effects of COVID. Using survey data, we analyzed the biggest factors in a person's mental health during quarantine. We then created this webapp for people to put in their information and get a mental health risk score."
    }
]

const IndexPage = () => {
  return (
    <main >
    <div>
        <Header />
    </div>
    <div style={pageStyles}>
      <div id='opener' style={{paddingBottom: '100px'}}>
        <h1 style={headerStyles}>
          Hi. I'm Johnson.
        </h1>
        <h1 style={headerStyles}>
          你好。我是庄森。
        </h1>
        <h1 style={headerStyles}>
          こんにちは。僕はジョンソンです。
          <div id='contact'>
          <a href="https://github.com/jlin99/" className = {imageStyles.socialmedia}> 
            <img class="image-top" src={'github1.png'} alt="Github"></img>
            <img class="image-bottom" src={'github2.png'} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/lin-johnson/" className = {imageStyles.socialmedia}>
            <img class="linkedin-img" src={'linkedin1.jpg'} alt="LinkedIn"></img>
            <img class="image-bottom" src={'linkedin2.jpg'} alt="LinkedIn"></img>
          </a>
          <a href="mailto:johnsonlin@vassar.edu" className = {imageStyles.socialmedia}>
            <img class="image-top" src={'mail1.png'} alt="Email"></img>
            <img class="image-bottom" src={'mail2.png'} alt="Email"></img>
          </a>
        </div>
        </h1>
      </div>
      <h2 style={subheaderStyles}>
        About Me
      </h2>
      <p>
        I'm currently a senior at Vassar College. I'm a math major with a focus on statistics. I'm a self-taught coder with a deep interest in ML/AI. I previously interned as a Product Manager at Midgame, a small startup dedicated to bringing people closer together. I love making meaningful connections and having a tangible impact. My interests include fashion, video games, ultimate frisbee, and music. 
      </p>
      <p>
        Any of the above interest you? Click on a sentence to read a little more. 
      </p>
      <h2 style={subheaderStyles}>
        Projects
      </h2>
      <p>
        Check out some of the cool things I've done in my free time: 
      </p>
      <div id='projects'>
      {projects.map(project => (
        <Link to={project.link} style = {projectStyles} className = {projectBackground.projectDiv}>
        <div class='project'>
          <h3 style = {projectText} className = {projectBackground.projectText}>{project.title}</h3>
          <h5 style = {projectText} className = {projectBackground.projectText}>{project.date}</h5>
          <p style = {projectText} className = {projectBackground.projectText}>{project.description}</p>
        </div>
        </Link>
      ))}
      </div>
    </div>
    </main>
  )
}

export default IndexPage
