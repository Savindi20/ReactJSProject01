import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food = "Kottu" price="RS 350"> 
        <span>This is the description</span>
      </TopicBox>
      <TopicBox food = "Rice" price="RS 250">
        <button>This is a button</button>
      </TopicBox>
      <TopicBox food = "Hoppers" price="RS 150">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis in corrupti quasi nam. Natus non esse quae aperiam blanditiis suscipit similique porro, inventore distinctio ipsa repellendus magnam labore molestias delectus!</p>
      </TopicBox>
    </div>
  )
}
