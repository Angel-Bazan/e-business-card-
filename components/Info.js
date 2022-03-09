import React from "react"

export default function Info () {
    return (
    <div className="info">
        <header className="info--header">
            <img src="./images/Angelssss.jpeg" className="info--picture" />
        </header>
        
        <div className="info--about">
            <h1 className="main--name">Angel Sanchez</h1> 
            <h3 className="main--title">FrontEnd Developer</h3>
            <a href="https://sanchezbazan.com/">
                <h4 className="main--website">sanchezbazan.com</h4>
            </a>
        </div>
        
        <div className="info--contact">
            <a href="https://www.linkedin.com/in/angel-sanchez-a09723190/">
                <button className="info--linkedin">LinkedIn</button>
            </a>
              <a href="mailto:angelsanchez.as524@gmail.com">
                <button className= "info--email">Email</button>
            </a>
        </div>
        
    </div>
    )
}