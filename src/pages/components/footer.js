import React from "react"

const footerStyle = {
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    textAlign: "center",
    color: "silver",
    fontSize: "12px",
}
export default function Footer() {
    return (
        <div style={footerStyle}>
            <div>
                © All rights reserved. 
            </div>
        </div>
    )
}