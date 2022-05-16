import React, { useState } from 'react'

const Student = () => {
    var[name,setName]=useState("Rahul")
    var[age,setAge]=useState("32")
    var[college,setcollege]=useState("MZC")

    const changeName=()=>{
        setName(name='mahima')
        setAge(age='23')
        setcollege(college='mount zion')

    }
  return (
    <div>
        
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label><br/>
                    <label for="" className="form-label">{name}</label><br/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Age</label><br/>
                     <label for="" className="form-label">{age}</label><br/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">College</label><br/>
                    <label for="" className="form-label">{college}</label><br/>
                </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={changeName} className="btn btn-success">Change</button>
                </div>
            </div>
        </div>
    </div>
</div>
         </div>
  )
}

export default Student