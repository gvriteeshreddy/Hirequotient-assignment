import React from 'react';
import './Integration.css';
import framerImage from '../../Assets/framer.png';
import { AiFillSlackCircle } from "react-icons/ai"; 
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoDropbox } from "react-icons/io5";
import { SiNotion } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { FaSquareGitlab } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Integration = () => {
  return (
    <div className='integration-section'>
    <div className="integration">
      <div className="centered">
        <p className='highs'> # Integrations</p>
        <div className="logos-left">
  <AiFillSlackCircle className="icon-spacing" style={{ fontSize: '100px', color: 'aqua' }} />
  <IoLogoFigma className="icon-spacing" style={{ fontSize: '100px', color: 'purple' }} />
  <IoLogoDropbox className="icon-spacing" style={{ fontSize: '100px', color: 'aqua' }} />
  <SiFramer style={{ fontSize: '100px', color: 'purple' }} />
</div>
        <p className='hightext' style={{fontSize:50}}>
         Enable <span className='orangecol'>integration</span> with <br/> other popular tools and  <br/> platforms
          
        </p>
        <p className='lowtext'style={{fontSize:20}}>
          Seamlessly connect and amplify your workflow <br/> by enabling integration with a diverse array of <br/> widely-used tools and platforms.
        </p>
      </div>
      
      <  img src={framerImage} alt="Framer" />
      <div className="logos-left">
  <BiLogoGmail className="icon-spacing" style={{ fontSize: '100px', color: 'aqua' }} />
  <SiNotion className="icon-spacing" style={{ fontSize: '100px', color: 'purple' }} />
  <FaSquareGitlab className="icon-spacing" style={{ fontSize: '100px', color: 'aqua' }} />
  <FaGithubSquare style={{ fontSize: '100px', color: 'purple' }} />
</div>

          
      
    </div>
    </div>
  );
};

export default Integration;
