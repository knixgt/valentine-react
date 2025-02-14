import { Route,Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import {GIF} from './GIF'
import {YES} from './YES'

export const App = () => {
  return (
    <div className='App'>
      <Routes>
      <Route path="/" element={<GIF />} />
      <Route path="/YES" element={<YES />} />
      </Routes>
    </div>
  )
}
