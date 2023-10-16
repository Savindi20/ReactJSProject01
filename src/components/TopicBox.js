import React from 'react'
import './topicbox.css' 

export default function TopicBox() {
  const topic = "My Name Savii"
  const item = "Live in Matara"

  return (
    <div>
      <div className='topicBox'>
        <span className='text'>{topic} {item}</span>
      </div>
    </div>
  )
}
