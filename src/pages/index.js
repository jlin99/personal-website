import React, { useState} from "react"
import { Link } from "gatsby"
import imageStyles from "./image.module.css"
import Header from "./components/header.js"
import projectBackground from "./project.module.css"
import invisibleText from "./invisible.module.css"
import Footer from "./components/footer.js"
import creativeTitle from "./corners.module.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './accordion.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import "./main.css"
import mobileAccordion from "./accordion.module.css"

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: "100px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "18px",
  lineHeight: "1.5",
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
const creativeText = {
  color: "white",
  fontSize: "20px",
  padding: "3%",
  textAlign: "center",
  lineHeight: "1.4",
}
const hrStyle = {
  width: "50%",
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
  const [showMsg, setShowMsg] = useState(false)
  const toggleClick = () => {
    setShowMsg(!showMsg)
  }
    return (
    <main>
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
        </h1>
          <div id='contact'>
          <a href="https://github.com/jlin99/" className = {imageStyles.socialmedia}> 
            <img class="image-top" src={'github1.png'} alt="Github"></img>
            <img class="image-bottom" src={'github2.png'} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/lin-johnson/" className = {imageStyles.socialmedia}>
            <img class="linkedin-img" src={'linkedin1.jpg'} alt="LinkedIn"></img>
            <img class="image-bottom" src={'linkedin2.jpg'} alt="LinkedIn"></img>
          </a>
          <CopyToClipboard text={"johnsonlin@vassar.edu"} onCopy={toggleClick}>
          <a className = {imageStyles.socialmedia}>
            <img class="image-top" src={'mail1.png'} alt="Email"></img>
            <img class="image-bottom" src={'mail2.png'} alt="Email"></img>
          </a>
          </CopyToClipboard>
          <br></br>
          <p style={{
            display: showMsg ? 'block' : 'none',
            textAlign: "right",
            fontSize: "14px",
            fontStyle: "italic",
            textDecorationColor: "black",
            color: "#ffa500",
            marginTop: "50px"
          }}>Email Copied.</p>
          </div>
      </div>
      <div>
      <h2 style={subheaderStyles}>
        About Me
      </h2>
      <p>
        I'm currently a senior at Vassar College. I'm a math major with a focus on statistics. I'm a self-taught coder with a deep interest in ML/AI. I previously interned as a Product Manager at Midgame, a small startup dedicated to bringing people closer together. I love making meaningful connections and having a tangible impact. My interests include fashion, video games, ultimate frisbee, and music. 
      </p>
      <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem className={mobileAccordion.mobile}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Find any of that interesting? Want some more details? 
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  I had data science as my career goal for the past two years or so. I loved my Probability class which led me to take more statistics classes and then after I took Statistical Learning during my year abroad at Peking University, I realized how tangible and accessible Machine Learning was. That class changed ML/AI from some magical black box to something I actually understood. As someone who self learned Python in high school and as a current math major, it feels like a perfect fit for my skill set. It's clear to me that data is going to be one of the biggest driving forces for the future and I want to be a part of that. 
                </p>
                <p>
                  But after my internship at Midgame, I realized I was interested in beyond just that. I really enjoyed the aspect of identifying problems and designing solutions. It was exciting having the opportunity to think big and imagine a near future where my ideas come to fruition. I loved talking to users and hearing them speak about some of their stories and some of their frustrations. Forming those kinds of meaningful connections is also why I was such an active student leader, serving as a Student Fellow (Vassar's version of an RA) and on multiple executive boards. It was extremely rewarding building a community and seeing that I made a positive impact on the people around you. I will always remember an ASA (Asian Students' Alliance) member telling me that participating in the fashion show I had planned was the first time they felt like they were truly a part of Vassar's Asian community and that they were very grateful for that.
                </p>
              <AccordionItem className={mobileAccordion.mobile}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Want to hear the rest of my life story while you're here? 
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <AccordionItem className={mobileAccordion.text}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Are you sure? 
                      </AccordionItemButton>
                    </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      If you insist.
                    </p>
                    <p>
                      I'm a child of Chinese immigrants. My father was deported when I was in 1st grade. I was pretty young at the time so I don't really remember feeling any tangible absence as I must've gotten used to it pretty quickly. Up until the past year, I thought it hadn't really affected me in any way. But I realize now that it's a rather defining aspect of my personality. I'm beyond lucky that it manifested in a positive way, largely because of an amazing mom in my life. 
                    </p>
                    <p>
                      My mom continued the family business herself, working to support me and my sister. She owned a dollar store that I spent countless hours at helping out. Growing up in a family of unskilled low income immigrants means that I have a lot of responsibilities outside of being a student, including serving as a translator for my parents and grandparents, and needing to support them financially as soon as I'm able to. In high school, I did not cope very well with that reality. 
                    </p>
                    <p>
                      I was a pretty awful student. I barely paid attention in my classes. I almost never took notes. I didn't even do my own homework for the first two years of high school. It's a miracle that I even graduated high school. I was just depressed and tired all the time. Which likely led to my unhealthy habit of drinking energy drinks all the time. But energy drinks was also the bait that hooked me on hackathons. Two of my best friends started attending hackathons and they told me that there's free Monsters and that's the sole reason I decided to attend my first hackathon in 10th grade. While I was there, I figured I might as well learn to code. I started to learn Python. I continued to attend hackathons and even organized a few with my friends. And it was at these hackathons where my friends saw me fall asleep for the first time and they would joke about how loud I snore. I distinctly remember at a HackRU, I had fallen asleep, and apparently people passing by came to check on me because my snoring was alarming to them. After several comments of my extremely loud snoring, a few times of falling asleep at the wheel, and a well timed Reddit post about sleep apnea, I decided to go to a sleep doctor towards the end of my senior year. 
                    </p>
                    <br></br>
                    <hr style = {hrStyle}></hr>
                    <br></br>
                    <p>
                      It turns out I have severe sleep apnea. That's why I snore really loud and why I sound like I'm dying in my sleep. I was super lucky to have been diagnosed early on. Aside from the long term problems untreated sleep apnea can cause, I'm also so glad to be able to just sleep well. No longer do I sleep for 10+ hours and still require a nap by 3pm. After about a month of adjusting to sleeping with a CPAP machine, I began college with a fresh start, brimming with energy. 
                    </p>
                    <p>
                      I hit the ground running at Vassar and I haven't slowed down yet. I finally have the energy to dedicate time for my studies and even have extra energy to explore my many interests. Some of my favorite activities include going thrifting and altering clothes, heading to the arcade to play DDR, throwing a frisbee around with friends, playing Melee, learning new languages (안녕. 저는 존슨 이에요.), and finding new music. At Vassar, I fell in love with the problem solving aspect of my math classes and language learning, specifically Chinese and Japanese. 
                    </p>
                    <p>
                      I was set to study abroad in China and Japan for my junior year. An idea unfathomable to high school me as I had just assumed I would never be able to finance something as lavicious as study abroad. But I was very blessed to be studying at an institution with generous financial aid. My fall semester at Peking University was one of my toughest, taking half of my classes in Chinese because I severly overestimated my fluency of the language. During the semester, I had to navigate applying to Sophia University so that I could be clear to go to Japan in the spring. After a whole day of panicking because I was struggling to find a hospital that would fill out a physical examination form in English, and a significant amount of money down the drain, my plans to study abroad in Japan fell through for reasons outside of my control. Despite receiving confirmation from my school that they mailed my transcript, Sophia University never got it. I was rejected. 
                    </p>
                    <p>
                      I was lost and disappointed. I had planned my entire year banking on studying abroad in Japan. My flight ticket back to America was a full week after Vassar's spring semester because I was going to spend Chinese New Year with my dad's side of the family for once. Luckily, I had been taking the maximum amount of credits every semester. I decided to take the semester off since I could still graduate on time. I returned home at the end of January, right at the height of the COVID pandemic in China. I still distinctly remember landing in America and thinking I'm finally safe.
                    </p>
                    <br></br>
                    <hr style={hrStyle}></hr>
                    <br></br>
                    <p>
                      It's funny how it works out. My spring semester in Japan would have been cancelled anyways with the state the world was in by the end of March. But because I took the semester off, I was searching for jobs and internships. And I was blessed with an opportunity at Midgame, where I discovered what Product Management even was for the first time. While graduating during a pandemic is obviously not ideal, I'm still amazed by how things have really worked out for me.
                    </p>
                    <p>
                      I wasn't joking when I said it's a miracle I even graduated high school. I really think it is. Everyday I think about these miracles: turning out alright despite my upbringing, catching my sleep apnea early, getting into Vassar, making the best out of the COVID situation. I think a lot about the people who were big facilitators for my miracles. I hope that some day I'm in the position to also play a part in someone else's miracle. 
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </AccordionItemPanel>
            </AccordionItem>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      </div>
      <div id='projects'>
      <h2 style={subheaderStyles}>
        Projects
      </h2>
      <p>
        Check out some of the cool things I've done in my free time: 
      </p>
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
      {/* Need the below code otherwise div starts in the middle of projects */}
      <h3 className = {invisibleText.noselect} style={{color: "white"}}>
        Invisible text so that the div below can have orange background. 
      </h3>
      <div style={{backgroundColor: "#ffa500"}}>
        <p style = {creativeText}>I do other cool things that show off some of my non-technical skills! Check it out:
        <br></br>
        <br></br>
        <Link to="/creative/" className={creativeTitle.creativeTitle}> Creative Corner</Link></p>
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </main>
  )
}

export default IndexPage
