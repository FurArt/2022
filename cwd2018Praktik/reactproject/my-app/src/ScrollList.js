import React from "react";

const ScrollList = (props)=>{
    console.log(props)
    return (
      <div className="scroll" style={{
        'overscroll-behavior-y': 'auto',
        'height': '1000px',
        'overflow': 'scroll'
      }}>
        {props.children}
      </div>
    )
  }
export default ScrollList