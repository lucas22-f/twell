import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileButtonGrid from './components/content/Content'
import ModalForm from './components/modal/ModalForm';

function App() {
  

  return (
    <>
      <div style={{ width: "250px", margin :"0 auto", marginTop:"15px"}} className='mb-4'>
        <img src="../assets/1.png" style={{ width: "100%", borderRadius: "50%" }} alt="" />
      </div>
  
      
      <ModalForm></ModalForm>
    </>
  )
}

export default App
