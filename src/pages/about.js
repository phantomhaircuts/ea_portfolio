import React from "react"
import { Link } from "gatsby"
import aboutStyle from "../styles/about.module.scss"

const AboutPage = () => (
  <main>
    <div className={aboutStyle.entryWrapper}>
      <h3>Background</h3>
      <p className={aboutStyle.entry}># <mark>Design Technologist</mark> Freelance - 2014-NOW</p>
      <p className={aboutStyle.entry}># <mark>Web Development Immersive Instructor</mark> General Assembly - 2017-2018</p>
      <p className={aboutStyle.entry}># <mark>Software Developer</mark> Vagabond - 2015-2017</p>
      <br/>
      <p className={aboutStyle.entry}># <mark>Parsons School Of Design</mark> (2019)</p>
      <p className={aboutStyle.entry}># <mark>General Assembly</mark> (2015)</p>
      <h3>Selected Projects</h3>
      <p className={aboutStyle.entry}># <mark>Pepsi Co.</mark> Concept Videos/ Creative Direction / Writing / Editing (2019)</p>
      <p className={aboutStyle.entry}># <mark>Vagabond</mark> Custom CMS/ JS - Angular - Node / Development / Planning (2017)</p>
      <p><Link to="/" className={aboutStyle.navLink}>Less</Link></p>
    </div>

  </main>
)

export default AboutPage
