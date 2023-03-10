import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const home = () => {

  const alreadyUser = localStorage.getItem("checkPoint")
  const navigate = useNavigate();

  useEffect(()=>{
    if(alreadyUser != null){navigate("/main")}
  },[])
  
  
  return (
    <div className="flex flex-col items-center justify-center h-screen font-bold">
      <div className='flex flex-col items-center justify-center'>
        <h1 className='pt-4 text-white text-xl'>4Pass</h1>
        <p className='pt-4'>correct horse battery staple</p>
        <p>your passwords.</p>
      </div>
      <div className='pt-4'>
        <Link to={'/intro'} className='btn btn-wide'>Create your phrase.</Link>
      </div>
    </div>
  )
}

export default home