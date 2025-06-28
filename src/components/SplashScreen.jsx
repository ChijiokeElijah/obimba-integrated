import React from 'react'
import logo from '../images/logo.png'

export default function SplashScreen() {
  return (
    
      <div id="splash" class="fixed inset-0 bg-green-950 text-white flex items-center justify-center text-4xl font-bold animate-fade-in-out z-50">
              <div className='flex flex-col items-center justify-center'>
                  <img src={logo} className='h-50 w-50'/>
                  <h1 className='font-mono'>OBIMBA INTREGRATED SERVICES</h1> 
              </div> 
          </div>
      

  )
}
