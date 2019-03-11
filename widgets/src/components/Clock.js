import React, { Component } from 'react'

class Clock extends Component {
  state = {
    time: new Date()
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ 
      time: new Date()
    })
  }

  render() {
    const { time } = this.state;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = hours < 10 ? `0${hours}`: hours;
    minutes = minutes < 10 ? `0${minutes}`: minutes;
    seconds = seconds < 10 ? `0${seconds}`: seconds;

    return (
      <div>
        <h1>Clock</h1>
        <div style={clockStyle} className="clock">
          <p>
            <span>Time:</span>
            <span>{hours}:{minutes}:{seconds} PDT</span>
          </p>
          <p>
            <span>Date:</span>
            <span>{time.toDateString()}</span>
          </p>
        </div>
      </div>
    )
  }
}

const clockStyle = {
  width: '550px',
  height: '94px',
  background: 'orange',
  color: 'white',
  fontFamily: 'ZCOOL QingKe HuangYou, cursive',
  fontSize: '30px',
  border: '2px solid black'

}

export default Clock
