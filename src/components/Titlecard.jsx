import React from 'react'

const Titlecard = () => {
  return (
    <div class="w-full min-h-screen flex justify-center items-center"> 
        <div class="bg-white w-80 p-4 rounded-2xl drop-shadow-lg">
            <img class="mx-auto rounded-lg mb-3" src="/image-qr-code.png" alt="QR Code"></img>
            <h1 class="font-bold text-center text-xl p-4">Improve your front-end skills by building projects</h1>          
            <p class="text-center text-darkgrey">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p> 
        </div>
    </div>
  )
}

export default Titlecard