import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <div className='bg-gray-200'>
      <Header/>
      <div className="h-full w-full flex items-center justify-center">
        <HomePage/>
      </div>
    </div>
  )
}
ReactDOM.render(<Root />, App)
