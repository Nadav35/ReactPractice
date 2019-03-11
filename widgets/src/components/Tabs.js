import React, { Component } from 'react';

import Headers from './Headers';

export class Tabs extends Component {
  state = {
    index: 0
  }

  updateIndex = (index) => {
    this.setState( {
      index
    });
  }

  render() {
    const { tabsInfo } = this.props;
    const { index } = this.state; 
    // console.log(index);
    

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <div className="tabs-container">
          <Headers tabsInfo={tabsInfo} 
          updateIndex={this.updateIndex}
          curTabIndex={index}
        />
          <div className="tabs-content">
            <p>{tabsInfo[index].content}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Tabs
