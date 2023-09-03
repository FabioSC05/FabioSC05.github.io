import React from 'react';

import profileImg from '../images/Perfil.jpg';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <aside id="personal-info">
        <img src={ profileImg } alt="Minha Foto" width="200px" />
        <h2>Fábio de Souza Carvalho</h2>
        <p>Duque de Caxias - RJ</p>
        <p>(21) 98559-1204</p>
        <p>fabioscarvalho1990@gmail.com</p>
        <p>
          <a href="https://github.com/FabioSC05" target="_blank" rel="noopener noreferrer">
            <img src={ githubIcon } alt="GitHub" width="25px" />
          </a>
        </p>
        <p>Design By Trybe</p>
      </aside>
    );
  }
}

export default PersonalInfo;
