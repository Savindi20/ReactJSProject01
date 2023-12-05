import React from 'react'
import './topicbox.css' 

export default function TopicBox() {
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
        {/* <span className='text'>{topic} {item}</span> */}
        {/* <span className='text'>{c}</span> */}
        {/* <span className='text'>{alert("Hello")}</span> */}
        {/* <span className='text'>{foodprices}</span> meka waradi object return */}
        <span className='text'>My favourite food is Kottu and fride rice</span>
      </div>
    </div>
  )
}
