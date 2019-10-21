import React from "react"
import Layout from "../components/layout"
import githubLogo from "../images/github.png"
import instagramLogo from "../images/instagram.png"
import codepenLogo from "../images/codepen.png"
import indexStyle from "../styles/index.module.scss"
import terminalStyle from "../styles/terminal.module.scss"

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      letters: [' ', 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!' ],
      helloWorld: " "
    };
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.print(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  print(){
    let letterArr = this.state.letters;
    let slicedLetter = letterArr.shift();
    if(slicedLetter !== undefined){
      let nextLetter = this.state.helloWorld;
      nextLetter += slicedLetter;
      this.setState({
        letters: letterArr,
        helloWorld: nextLetter
      })
    } else{
      clearInterval(this.timerID);
    }
  }

  render(){
    return (
      <div className={indexStyle.indexWrapper}>
      <h1>#Erik Anderson.</h1>
      <div className={terminalStyle.terminal}>Eriks-Portfolio:~ home$
      <span className={terminalStyle.typeText}>{this.state.helloWorld}</span>
      </div>
      <p>Creative Coder | Designer</p>
      <span>
      <a href="http://github.com/phantomhaircuts/"><img src={githubLogo} className={indexStyle.indexLogo} alt="github"/></a>
      <a href="https://www.instagram.com/flying__fortress/"><img src={instagramLogo} className={indexStyle.indexLogo} alt="instagram"/></a>
      <a href="https://codepen.io/phantomhaircuts"><img src={codepenLogo} className={indexStyle.indexLogo} alt="codepen"/></a>
      </span>
      <h2><a href="mailto: itserikanderson@gmail.com">Contact Me.</a></h2>
      </div>
    )
  }
}
