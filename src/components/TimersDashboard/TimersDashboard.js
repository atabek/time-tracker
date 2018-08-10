import React, { Component } from "react"

import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";

class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: 1,
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: 2,
      elapsed: 1273998,
      runningSince: null,
      },
    ],
  }
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList timers={this.state.timers}/>
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;