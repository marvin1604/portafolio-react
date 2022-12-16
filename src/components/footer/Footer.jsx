import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <div id="buttons-footer"> 
        <a href="https://www.facebook.com/mar.rodriguez.7359/" className="fab fa-facebook"></a>
        <a href="https://www.instagram.com/developer_python_/" className="fab fa-instagram"></a>
        <a href="https://github.com/marvin1604" className="fab fa-github"></a>
        <a href="https://www.linkedin.com/in/walter-rodriguez-sanchez-67bb8a1b5/" className="fab fa-linkedin"></a>
      </div>
      <p id="email"><span class="fa-solid fa-envelope"></span> walter.rodriguez.dev@gmail.com</p>
      <p id="country"> <span class="fa-solid fa-house"></span> Lima, Perú</p>

      <p>&copy; Copyright marvin1604 </p>
    </div>
  )
}

export default Footer