import React, { Component } from 'react';

import TimersDashboard from '../../components/TimersDashboard/TimersDashboard';

class App extends Component {
  render() {
    return (
      <div id="main" className="main ui">
        <div className="ui dividing centered header">
          <TimersDashboard />
        </div>
      </div>
    );
  }
}

export default App;
