import React from 'react'
import kiss from './assets/kiss.gif'
import './YES.css'
import { Link } from 'react-router-dom';

export const YES = () => {
  return (
    <div className='YES'>
        <img className='YESimg' src={kiss}></img>
        <h1 className='YEStxt'>(You're literally my favourite person)</h1>
        <Link to="/"><button className='YESbtn' style={{backgroundColor:'red'}}>Ok take me back this is cringe</button></Link>
    </div>
  )
}
