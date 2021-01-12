import React from "react"
import { Link } from "gatsby"
import "./main.css"

const pageStyles = {
    color: "#232129",
    paddingTop: "100px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontSize: "18px",
    lineHeight: "1.5",
}

const HirePage = () => {
    return(
        <main style={pageStyles}>
            <p>Hi!</p>
            <p>I just wanted to say thanks for checking out my website. I know recruiting season can be hectic for all parties. I really appreciate you taking the time to check out my website. I'm sure your time is very valuable, but I would love it if you could take the time to fully explore my website. My goal was to make this website portray me as a person holistically, something that is nearly impossible to accomplish with just a resume. I hope you find something in my website speaks to you in some manner.</p>
            <p>If you're interested in learning more about me, please feel free to contact me by email (johnsonlin@vassar.edu) or by phone number (732-589-6768). Thank you again for your time. Hope everything is well and that you are staying safe!</p>
            <p>Best,</p>
            <p>Johnson</p>
            <Link to="/" style={{color: "#ffa500", fontWeight: "bold"}}>Continue to website.</Link>
        </main>
    )
}
export default HirePage