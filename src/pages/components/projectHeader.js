import React from "react"
import linkStyle from "./link.module.css"

const backButton = {
    textDecoration: 'none',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontWeight: 'bold',
    float: "left",
    color: "black",
    marginLeft: "-7%",
}

export default function ProjectHeader() {
    return (
        <div>
            <title>Johnson Lin</title>
            <div>
                <a href="https://johnsonl.in/#projects" style={backButton}>
                    <p className = {linkStyle.link}>&#8249; Back</p>
                </a>
            </div>
        </div>
    )
}
