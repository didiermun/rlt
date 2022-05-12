import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <>
      <Header/>
      <div className="absolute h-full w-full flex items-center justify-center bg-gray-200">
        <HomePage/>
      </div>
    </>
  )
}
ReactDOM.render(<Root />, App)
