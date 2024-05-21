import React, { useState } from 'react';
import './App.css';

function App() {
  const [visibleBoxes, setVisibleBoxes] = useState(1);
  const [releaseVersion, setReleaseVersion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCheckboxChange = () => {
    setVisibleBoxes(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Release Version:', releaseVersion);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  const boxColors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label htmlFor="release-version">Release Version:</label>
          <input
            type="text"
            id="release-version"
            value={releaseVersion}
            onChange={(e) => setReleaseVersion(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="end-date">Tentative End Date:</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {boxColors.map((color, index) => (
        <Box
          key={index}
          isVisible={visibleBoxes > index}
          handleCheckboxChange={handleCheckboxChange}
          buttons={['Button 1', 'Button 2', 'Button 3', 'Button 4']}
          color={color}
        />
      ))}
    </div>
  );
}

function Box({ isVisible, handleCheckboxChange, buttons, color }) {
  return (
    <div className={`box ${isVisible ? 'visible' : 'hidden'}`} style={{ backgroundColor: color }}>
      <div className="buttons">
        {buttons.map((buttonText, index) => (
          <button key={index}>{buttonText}</button>
        ))}
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} />
          Show next box
        </label>
      </div>
    </div>
  );
}

export default App;
