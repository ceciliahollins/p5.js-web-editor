import React from 'react';
import Activity00 from '../activities/activity00';

const PuzzleView = () => (
  <div className="puzzle-view-container">
    <Activity00 />
    <button type="button" className="nextButton">
      <div>
        <h2> Next activity </h2>
      </div>
    </button>
  </div>
);

export default PuzzleView;
