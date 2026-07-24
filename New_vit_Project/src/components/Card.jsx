import React from 'react'

const Card = () => {
  return (
    <div style={{alignContent:"center"}}>
        <div style={{border:'2px solid red',height:"300px",width:"300px",backgroundColor:"white",alignItems:"center"}}>
        <h5 style={{color:'red'}}>ABES STUDENT CARD</h5>
        <img style={{height:"100px",width:"100px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaFQHCkxV0KtJgIovltneHWXWumQbJVmYbhNG2--H6g&s=10"></img>
        <p style={{color:'red',fontSize:"20px"}}>Name-SOLDIER BOY</p>
        <p style={{color:'red',fontSize:"20px"}}>Class-btech CSE</p>
        <p style={{color:'red',fontSize:"20px"}}>Year-3rd</p>
        </div>
    </div>
  )
}

export default Card