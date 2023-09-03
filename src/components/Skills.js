import React from 'react';

import './Skills.css';

const basic = 'Básico';
const intermediate = 'Intermediário';
const advanced = 'Avançado';

class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        <h3>HTML 5</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>CSS 3</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>JavaScript ES6</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>DOM</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Jest</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>React.js</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>React Router</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>React Redux</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>React Hooks</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>Docker</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>MySQL</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step complete">{ advanced }</div>
        </div>

        <h3>APIs Restfull</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step complete">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>

        <h3>Node.js</h3>
        <div className="progress">
          <div className="step complete">{ basic }</div>
          <div className="step">{ intermediate }</div>
          <div className="step">{ advanced }</div>
        </div>
      </section>
    );
  }
}

export default Skills;
