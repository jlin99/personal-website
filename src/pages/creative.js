import * as React from "react"
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import sections from "./creativeSections.module.css"
import invisibleText from "./invisible.module.css"
import { Link } from "gatsby"
import portraitThumb1 from "./thumbnails/portraitThumbnail1.png"
import portraitThumb2 from "./thumbnails/portraitThumbnail2.png"
import fashionThumb from "./thumbnails/fashionShowThumbnail.jpg"
import clothesThumb from "./thumbnails/fashion.jpeg"

const mainStyle = {
    color: "#232129",
    paddingLeft: "11%",
    paddingRight: "11%",
    paddingTop: "10%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontSize: "18px",
    lineHeight: "1.5",
}
const linkStyle = {
    color: "#ffa500",
}
const portraitStyle = {
    width: '48%',
    height: 'auto',
    margin: '0.5%',
}
const fashionStyle = {
    width: '96%',
    height: 'auto',
    margin: '0.5%',
}

const CreativePage = () => {
    return(
        <main >
        <div>
            <Header />
        </div>
        <div >
        <h2 className={invisibleText.noselect} style={{color: "white"}}>Another invisible text fix.</h2>
        </div>
        <div style={mainStyle} className = {sections.flexbox}>
            <div className = {sections.column}>
                <div className = {sections.default}>
                    <p className={sections.defaultText}>
                        Welcome to my creative corner!
                        <br></br>
                        Hope you enjoy my passion projects. 
                    </p>
                </div>
            </div>
            <div className = {sections.column}>
                <p className = {sections.text}>
                    <Link to="/clothes/" style={linkStyle} className={sections.clothesLink}> <p className={sections.linkText}>Fashion</p> <div className = {sections.clothes}>
                        <img src={clothesThumb} alt="Custom Clothes & Fitpics" style= {fashionStyle}/>
                    </div></Link> is my biggest hobby. I like to make clothes and take pics sometimes. I've even had the opportunity to design my own <Link to="/fashion-show/" style={linkStyle} className={sections.fashionShowLink}><p className={sections.linkText}>fashion show.</p>
                    <div className = {sections.fashionShow}>
                        <img src={fashionThumb} alt="ASA Fashion Show" style={fashionStyle}/>
                    </div></Link>
                </p>
                <p className = {sections.text}>
                    I've written <Link to="/portrait/" style={linkStyle} className={sections.portraitLink}><p className={sections.linkText}>articles</p>
                    <div className = {sections.portrait}>
                            <img src={portraitThumb1} alt="Portrait Articles" style={portraitStyle} />
                            <img src={portraitThumb2} alt=""style={portraitStyle} />
                    </div> </Link>
                     about the relationship between Chinese takeout and Chinese Americans. 
                </p> 
                <p className = {sections.text}>
                    I'm currently learning to make <Link to="/beats/" style={linkStyle} className={sections.beatsLink}><p className={sections.linkText}>beats.</p>
                    <div className = {sections.beats}>
                        <p>I'm making one beat a day for the month of January. Check back in February to see what I've learned. </p>
                    </div>
                    </Link> 
                </p>
            </div>
            <div className={sections.footer}>
                <Footer />
            </div>
        </div>
        </main>
    )
}

export default CreativePage