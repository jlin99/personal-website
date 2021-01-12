import * as React from "react"
import CreativeHeader from "./components/creativeHeader.js"
import Footer from "./components/footer.js"
import Faces from "./thumbnails/Mac-Miller-FACES.png"
import ClothesGallery from "./components/clothesGallery.js"
import "./main.css"

const mainStyle = {
    color: "#232129",
    paddingTop: "150px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontSize: "18px",
    lineHeight: "1.5",
}

const clothesPage = () => {
    return(
        <div>
        <div>
            <CreativeHeader />
        </div>
        <main style={mainStyle}>
            <p>
                I got into fashion at the end of my senior year in high school. I had friends who were already into streetwear and it was starting to rub off on me. At first, with a very typical high school male mindset, my goal was to dress better because I thought that would help me get a girlfriend. But, what I ended up falling in love with was the creativity and self expression that clothes allow you to express. What was originally feeling good about the outfit I was wearing and constantly checking myself out in glass windows, slowly turned into a strong, intimate connection with the clothes I chose to associate myself with. I've kept an outfit diary of every outfit I've worn at college and one of my favorite parts is being able to look back and see as I begin to hone in on an aesthetic, the "end goal" of self expression in fashion. 
            </p>
            <p>
                By the end of my freshman year of college, I'd been so inspired I started thrifting more often and creating custom clothes for myself, the ultimate form of self expression in clothes. My influences are mostly from streetwear and antifashion. My favorite designers are Yohji Yamamoto and Raf Simons. I also pull from my own experiences and use Chinese characters often. 
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '16px'}}>
                Below are images of clothes I've altered. I've ommitted clothes with basic changes such as hemming or tapering and clothes made specifically for the ASA Fashion Show. Click on them for a short history of each item. 
            </p>
            
            <ClothesGallery />

            <h4>R.I.P. Mac Miller</h4>
            <p>
                Mac Miller's death is one of the first celebrity deaths to have really left an impact on me. Mac's progression through depression and addiction is clear throughout his discography. His last album, "Swimming", seemed to end on a happier note, a message of "We'll get through it in the end." It was one of my favorite albums that year, as someone who recently pulled themselves out of depression. I was so happy to see that Mac, too, was starting to get his life back on track. 
            </p>
            <p>
                He passed in September 2018, about a month after "Swimming" released. I could barely comprehend it then and I still find it hard to believe now. During winter break that year, I knew I had to dedicate something to him with how much his music mattered to me. I thrifted an oversized light wash denim shirt on which I painted the cover of his "FACES" mixtape on the back from memory, so it was mainly just the big shapes and colors of it. Mac Miller's posthumous album, "Circles", released in January 2020 while I was still in China for my semester abroad. I came home, with a reopened wound of losing Mac, to find that my mom had donated my denim shirt because she thought it looked ugly without consulting me. Aside from the fact that she insulted my painting skills, what hurt me more was that I had essentially lost a memorabilia of one of my favorite artists. I tried to track it down for a week, calling and emailing the drive that my mom donated to, hoping I might get a response. For an entire month after, I continued to daydream about how I would magically find it at one of the many thrift stores I frequented. 
            </p>
            <img src={Faces} alt="Mac Miller's FACES Mixtape Cover" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%', height: 'auto'}}/>
            <p>
                I still haven't found it yet. So instead, I dedicate this portion of my website to my lost shirt and Mac Miller. Thank you for sharing your pain with us and helping us feel a little less alone during dark times.
            </p>
        </main>
        <div>
                <Footer />
        </div>
        </div>
        
    )
}

export default clothesPage