import React from "react"
import linkStyle from "./link.module.css"
import { Link } from "gatsby"

const backButton = {
    textDecoration: 'none',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontWeight: 'bold',
    float: "left",
    color: "black",
    marginLeft: "3%",
    marginTop: "3%",
}

export default function CreativeHeader() {
    return (
        <div>
            <title>Johnson Lin</title>
            <div>
                <Link to="/creative/" style={backButton}>
                    <p className = {linkStyle.link}>&#8249; Back</p>
                </Link>
            </div>
        </div>
    )
}
