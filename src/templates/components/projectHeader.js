import React from "react"
import { navigate } from "gatsby"
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
                <div role = "button" tabIndex = {0} onClick={() => { navigate(-1) }} onKeyDown={() => { navigate(-1) }} style = {backButton}>
                    <p className = {linkStyle.link}>&#8249; Back</p>
                </div>
            </div>
        </div>
    )
}
