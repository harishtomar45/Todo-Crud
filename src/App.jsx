import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGoroup from './components/ListGoroup'

const App = () => {
  return (
    <>
    <Navbar/> 
    <div className="container p-5">
      <Form/>

      <ListGoroup/>
    </div>
    </>
  )
}

export default App