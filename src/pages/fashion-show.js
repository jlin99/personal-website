import * as React from "react"
import CreativeHeader from "./components/creativeHeader.js"
import Footer from "./components/footer.js"
import ImageGallery from "./components/fashionshowGallery.js"
import Speech from "./thumbnails/speech.jpg"
import ActionShot from "./thumbnails/actionShot.jpg"
import fullModel from "./thumbnails/fullModels.jpg"

const mainStyle = {
    color: "#232129",
    paddingLeft: "12%",
    paddingRight: "13%",
    paddingTop: "5%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontSize: "18px",
    lineHeight: "1.5",
}
const headerStyle = {
    color: "#ffa500",
    textDecoration: "underline",
}
const imgStyle = {
    width: '50%',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '18px',
    marginBottom: '18px'
}

const fashionPage = () => {
    return(
        <div>
        <div>
            <CreativeHeader />
        </div>
        <main style={mainStyle}>
            <div>
                <h1 style={headerStyle}>ASA Fashion Show</h1>
                <p>
                    The fashion show was an event I had dreamed of doing starting the end of my first year. After being elected as treasurer, an upperclassman who used to be treasurer for ASA reached out to help with the transition. In getting to know each other, I mentioned that one of my biggest hobbies at the time was fashion. They told me that ASA actually used to do a fashion show back when they were a first year but it had stopped for some reason. I knew in that moment that I wanted to bring it back. 
                </p>
                <p>
                    The fashion show was just an event for students to wear traditioanl clothing so that they can show off and feel proud about their culture. I wanted to keep that aspect but add my own twist to it. I tacked on my own runway portion. A modern fashion show where I got to explore showcasing the Asian American experience through clothes. I worked with 11 models and their wardrobes to put together looks inspired by Asian traditions. My designs incorporated things like Chinese dragon imagery, the usage of traditional items like kimono obi belts, and a reimagination of Upanayana, a sacred thread Hindu men wear on their left shoulder across the chest. Models also had makeup done involving symbols commonly associated with Asians such as numbers, a Pokéball, and a crossed out mouth as we are expected to be submissive. The message I wanted to get across was one I learned pretty quickly growing up. It doesn't matter how much of your culture you carry with you, whether you fully embrace your heritage or try to reject it, you are still perceived as foreign. 
                </p>
                <img src={Speech} alt="Talk at Fashion Show" style={imgStyle} /> 
                <p>
                    I still vividly remember this event. I remember placing chairs hours before the event, still having space after placing all of them, and thinking to myself, "Well, people can just sit on the floor I guess. If that many people even come." I was floored when I walked out and saw all the chairs taken and multiple groups of people on the floor or against the wall. I remember tearing up at the end thanking everyone for coming and thanking the people who put in the work to allow my dream to come true. After four months of planning and coordinating, thrifting clothes and altering them, taking pictures and launching posters on social media and in person, creating a last minute mix of Asian/Asian American artists, and a few rehearsals, I was still stunned by how much my hard work had paid off. I sometimes still struggle to believe that I really put together a fashion show. 
                </p>
                <img src={ActionShot} alt="Fashion Show Pic" style={imgStyle} />
                <p>
                    This event could not have happened without the help of several wonderful people. Thank you to Gabor Ptacek for being my right hand man throughout the whole planning process. Thank you to Alex Kim for taking pictures and bringing my Instagram campaign idea to life. Thank you to Tammy Wang for helping me with the logistics. Thank you to Kanako Kawabe and Petch Kingchatchaval for doing the make up. Thank you to Issac Yoo and Kevin Arce for taking additional photos at the event. Thank you to Jennifer Novak for helping me with creating the music cut. And of course, thank you to all the models for volunteering to walk on the runway. 
                </p>
                <img src={fullModel} alt="Pic with all models" style={imgStyle} />
                <p style={{ fontStyle:'italic'}}>
                    Below are pictures of the models individually. 
                </p>
                <div>
                    <ImageGallery />
                </div>
            </div>
        </main>
        <div>
                <Footer />
        </div>
        </div>
        
    )
}

export default fashionPage