import React from "react";
import img from "./Assets/images/account.svg"
import Data from "./Data";
import headerdesktop from './Assets/images/bg-header-desktop.svg';
import account from './Assets/images/account.svg';

function App() {
  return (
    <>
      <div className="header-img">
        <img src={headerdesktop} alt="" style={{width:'100%', height:'100%'}}/>
      </div>
      {Data.map((items) =>{
        const {company, logo, position, postedAt, contract, location, languages} = items;
        return <div className="container">
        <div className="box">
          <div className="img-info">
            <div className="img">
                <img src={logo} alt="" />
            </div>
            <div className="info">
              <label style={{display:'flex', gap:'1rem', alignItems:"center"}}><h3 style={{fontWeight:"500", color:"hsl(180, 100%, 41%)"}}>{company}</h3> <button style={{padding:'0.4rem', borderRadius:'30px', border:"none", fontSize:"18px", backgroundColor:"hsl(180, 100%, 31%)", color:"#fff"}}>new!</button></label>
              <h3 style={{color:"hsl(180, 100%, 41%)"}}>{position}</h3>
              <ul style={{display:'flex', gap:'1.5rem', color:"rgb(150, 147, 147)"}}><p>{postedAt}</p><li>{contract}</li> <li>{location}</li></ul>
            </div>
          </div>

          <div className="btn-container">
            {languages.map((language) =>{
              return(
                <button>{language}</button>
              )
            })}
          </div>

        </div>
      </div>
      })}
    </>
  );
}

export default App;
