import React, {useState} from "react";
import img from "./Assets/images/account.svg"
import Data from "./Data";
import headerdesktop from './Assets/images/bg-header-desktop.svg';
import account from './Assets/images/account.svg';
import { CiSearch } from "react-icons/ci";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () =>{
    setShow(!show);
  }
  return (
    <>
      <div className="header-img">
        <img src={headerdesktop} alt="" style={{width:'100%', height:'100%'}}/>
      </div>
      <div className="input-value">
        {show && <input type="text" />}
        <CiSearch style={{fontSize:"30px", cursor:"pointer"}} onClick={handleShow}/>
      </div>

      {Data.map((items) =>{
        const {company, logo, position, postedAt, contract, location, languages, tools, role, level, featured} = items;
        return <div className="container">
        <div className="box">
          <div className="img-info">
            <div className="img">
                <img src={logo} alt={company} />
            </div>
            <div className="info">
              <label style={{display:'flex', gap:'1rem', alignItems:"center"}}><h3 style={{fontWeight:"500", color:"hsl(180, 100%, 41%)"}}>{company}</h3> {featured && <button style={{padding:'0.4rem', borderRadius:'30px', border:"none", fontSize:"18px", backgroundColor:"hsl(180, 100%, 31%)", color:"#fff"}}>featured</button>}</label>
              <h3 style={{color:"hsl(180, 100%, 41%)"}}>{position}</h3>
              <ul style={{display:'flex', gap:'1.5rem', color:"rgb(150, 147, 147)"}}><p>{postedAt}</p><li>{contract}</li> <li>{location}</li></ul>
            </div>
          </div>

          <div className="btn-container">
            <button>{role}</button>
            <button>{level}</button>
            {tools.map((tool) =>{
              return(
                <button>{tool}</button>
              )
            })}
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
