import React from 'react';

import bloco0301 from '../images/0301.png';
import bloco0401 from '../images/0401.png';
import bloco0501 from '../images/0501.png';
import bloco0502 from '../images/0502.png';
import bloco0503 from '../images/0503.png';
import bloco0504 from '../images/0504.png';
import bloco0505 from '../images/0505.png';
import bloco0601 from '../images/0601.png';
import bloco0701 from '../images/0701.png';
import bloco0801 from '../images/0801.png';
import bloco0901 from '../images/0901.png';
import bloco1001 from '../images/1001.png';
import bloco1101 from '../images/1101.png';
import bloco1201 from '../images/1201.png';
import bloco1301 from '../images/1301.png';
import bloco1401 from '../images/1401.png';
import bloco1501 from '../images/1501.png';
import bloco1601 from '../images/1601.png';
import bloco1701 from '../images/1701.png';
import bloco1801 from '../images/1801.png';
import bloco1901 from '../images/1901.png';
import bloco2001 from '../images/2001.png';
import bloco2101 from '../images/2101.png';
import bloco2201 from '../images/2201.png';

import arrayProjects from './arrayProjects';
import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <ul>
          <a href="https://github.com/FabioSC05/Bloco-03-Lessons-Learned" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0301 } width="200" alt="Imagem do Projeto 1" />
              <h3>Lessons Learned</h3>
              <p>{ arrayProjects[1] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-04-Playground-Functions" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0401 } width="200" alt="Imagem do Projeto 2" />
              <h3>Playground Functions</h3>
              <p>{ arrayProjects[2] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-05-Pixels-Art" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0501 } width="200" alt="Imagem do Projeto 3" />
              <h3>Pixels Art</h3>
              <p>{ arrayProjects[3] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-05-To-Do-List" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0502 } width="200" alt="Imagem do Projeto 4" />
              <h3>To Do List</h3>
              <p>{ arrayProjects[4] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-05-Meme-Generator" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0503 } width="200" alt="Imagem do Projeto 5" />
              <h3>Meme Generator</h3>
              <p>{ arrayProjects[5] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-05-Color-Guess" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0504 } width="200" alt="Imagem do Projeto 6" />
              <h3>Color Guess</h3>
              <p>{ arrayProjects[6] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-05-Mistery-Letter" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0505 } width="200" alt="Imagem do Projeto 7" />
              <h3>Mistery Letter</h3>
              <p>{ arrayProjects[7] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-06-Trybewarts" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0601 } width="200" alt="Imagem do Projeto 8" />
              <h3>Trybewarts</h3>
              <p>{ arrayProjects[8] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-07-JS-Unit-Tests" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0701 } width="200" alt="Imagem do Projeto 9" />
              <h3>JS Unit Tests</h3>
              <p>{ arrayProjects[9] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-08-Zoo-Functions" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0801 } width="200" alt="Imagem do Projeto 10" />
              <h3>Zoo Functions</h3>
              <p>{ arrayProjects[10] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-09-Shopping-Cart" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco0901 } width="200" alt="Imagem do Projeto 11" />
              <h3>Shopping Cart</h3>
              <p>{ arrayProjects[11] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-10-Solar-System" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1001 } width="200" alt="Imagem do Projeto 12" />
              <h3>Solar System</h3>
              <p>{ arrayProjects[12] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-11-Tryunfo" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1101 } width="200" alt="Imagem do Projeto 13" />
              <h3>Tryunfo</h3>
              <p>{ arrayProjects[13] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-12-Trybetunes" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1201 } width="200" alt="Imagem do Projeto 14" />
              <h3>Trybetunes</h3>
              <p>{ arrayProjects[14] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-13-FrontEnd-Online-Store" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1301 } width="200" alt="Imagem do Projeto 15" />
              <h3>FrontEnd Online Store</h3>
              <p>{ arrayProjects[15] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-14-React-Testing-Library" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1401 } width="200" alt="Imagem do Projeto 16" />
              <h3>React Testing Library</h3>
              <p>{ arrayProjects[16] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-15-Trybewallet" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1501 } width="200" alt="Imagem do Projeto 17" />
              <h3>Trybewallet</h3>
              <p>{ arrayProjects[17] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-16-Trivia-React-Redux" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1601 } width="200" alt="Imagem do Projeto 18" />
              <h3>Trivia React Redux</h3>
              <p>{ arrayProjects[18] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-17-Star-Wars-Planets-Search" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1701 } width="200" alt="Imagem do Projeto 19" />
              <h3>Star Wars Planets Search</h3>
              <p>{ arrayProjects[19] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-18-Recipes-App" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1801 } width="200" alt="Imagem do Projeto 20" />
              <h3>Recipes App</h3>
              <p>{ arrayProjects[20] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-19-Docker-To-Do-List" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco1901 } width="200" alt="Imagem do Projeto 21" />
              <h3>Docker To Do List</h3>
              <p>{ arrayProjects[21] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-20-MySQL-All-For-One" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco2001 } width="200" alt="Imagem do Projeto 22" />
              <h3>MySQL All For One</h3>
              <p>{ arrayProjects[22] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-21-MySQL-One-For-All" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco2101 } width="200" alt="Imagem do Projeto 23" />
              <h3>MySQL One For All</h3>
              <p>{ arrayProjects[23] }</p>
            </li>
          </a>
          <a href="https://github.com/FabioSC05/Bloco-22-Talker-Manager" target="_blank" rel="noopener noreferrer">
            <li>
              <img src={ bloco2201 } width="200" alt="Imagem do Projeto 24" />
              <h3>Talker Manager</h3>
              <p>{ arrayProjects[24] }</p>
            </li>
          </a>
        </ul>
      </section>
    );
  }
}

export default Projects;
