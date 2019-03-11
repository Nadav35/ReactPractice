import React, { Component } from 'react';

export class Headers extends Component {



  render() {

    const { tabsInfo, updateIndex, curTabIndex } = this.props;
    // console.log(curTabIndex);
    
    return (
      <div className="tabs-headers">
        <ul className="tabs-list">
          {tabsInfo.map((tab, idx) => {
            const selClass = idx === curTabIndex ? 'selected' : '';
            return (
              <span 
                key={idx} 
                onClick={updateIndex.bind(this, idx)} 
                className={selClass}
              >
                {tab.title}
              </span>
            )
          })}

        </ul>
      </div>
    )
  }
}

export default Headers;
