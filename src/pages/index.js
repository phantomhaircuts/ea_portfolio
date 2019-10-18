import React from "react"
import Layout from "../components/layout"
import terminalStyle from "../styles/terminal.module.scss"


function print() {
  let typeText = [' ', 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!' ];
  typeText.forEach( (e, index) => { setTimeout( ()=> { document.getElementById('typeText').textContent += e }, index * 600 )});
}

export default () => (
  <Layout>
    <h1>#Erik Anderson.</h1>
    <div className={terminalStyle.terminal}>Eriks-Portfolio:~ home$ <span className={terminalStyle.typeText} id='typeText'>npm install -g</span></div>
    <p>+ this is a portfolio page, under constructiton.</p>
  </Layout>
)
