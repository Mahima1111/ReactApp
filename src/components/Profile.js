import React, { useState } from 'react'

const Profile = () => {
    var[name,setName]=useState("")

    const changeName=()=>{
        setName(name="mahima")
    }
  return (
    <div> 
        logged in as {name}
        <button onClick={changeName} className='btn btn-danger'>changeName</button>
    </div>
  )
}

export default Profile