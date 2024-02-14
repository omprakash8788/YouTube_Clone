import { useState } from 'react'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
const Home = ({sidebar}) => {

  const [category, setCategory]=useState(0)


  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home
