import React from "react"
import { Link } from "gatsby"
import linkStyle from './link_one.module.css'

const headerStyle = {
    textDecoration: 'none',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    fontWeight: 'bold',
}

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={headerStyle}>{props.children}</Link>
  </li>
)
export default function Header({ children }) {
  return (
    <div style={{ margin: `-2rem auto`, padding: `0 1rem` }}>
      <title>Johnson Lin</title>
      <header style={{ marginBottom: `1.5rem` }}>
        <ul style={{ listStyle: `none`, float: `right`, marginRight: '10%', marginBottom: '60px'}}>
          <ListLink to="/"><p className={linkStyle.link} style={{ color:'black'}}>Home</p></ListLink>
          <ListLink to="/creative/"><p className={linkStyle.link} style={{ color:'#ffa500'}}>Creative Corner</p></ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}