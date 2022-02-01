import React from 'react';
import { FaGithub } from "react-icons/fa"

function Footer() {
  return <section className='footer'>
    <div className='footer-content'>
      <h4>made by mukhtar with react</h4>
      <p>Source code: 
      <a href="https://github.com/spikeoze/movie-list" target="_blank"><FaGithub className='logo'/></a></p>
    </div>
  </section>;
}

export default Footer