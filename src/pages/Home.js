import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
      <TopicBox food = "Kottu" price="RS 350"/>
      <TopicBox food = "Rice" price="RS 250"/>
      <TopicBox food = "Hoppers" price="RS 150"/>
    </div>
  )
}
