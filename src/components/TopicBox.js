import React from 'react'
import './topicbox.css' 

export default function TopicBox(props) {
  // const topic = "My favourite food is Kottu"
  // const item = "and fride rice"

  // const a = 10;
  // const b = 20;
  // const c = a + b;

  // const foodprices = {kottu:"250",frideRice:"350",noodles:"240",riceAndCurry:"300"} mew kala hodaki
  // me widiyt boolean value, object return krnn ba
  //array,variable,string,number wage dewl return krnn puluwn
  return (
    <div>
      <div className='topicBox'>
        {/* <span className='text'>My favourite food is Kottu</span> */}  {/* meka hard code krnna puluwn */}
        {/* <span className='text'>{topic} {item}</span> */} {/* meka variable ekak hadala */}
        {/* <span className='text'>{c}</span> */} {/* meka variable ekak hadala */}
        {/* <span className='text'>{alert("Hello")}</span> */} {/* meka function ekak hadala */}
        {/* <span className='text'>{true}</span> */} {/* meka waradi boolean value ekak hadala return krnn ba */}
        {/* <span className='text'>{[1,2,3,4,5]}</span> */} {/* meka waradi array ekak hadala */}
        {/* <span className='text'>{foodprices}</span>*/} {/* meka waradi object ekak hadala return krnn ba */}
        {/* <span className='text'>My favourite food is {props.food}</span>*/} {/*meka props ekak hadala */}
        <span className='text'>My favourite food is {props.food} the Price is {props.price}</span> {/* meka props kihipayk hadala */}
      </div>
    </div>
  )
}
