import React from 'react'
import imageoverlay from '../assets/homeWebp/heroSection/overlayimg.webp'
import playicon from '../assets/homeWebp/heroSection/playicon.webp'
function VideoCard({handleVideo, vidthumb, title}) {
  return (
    <div id="video" onClick={handleVideo} className=' cursor-pointer rounded-md bg-gray-100  min-w-[11rem] h-[8rem] sm:min-w-[11rem] sm:max-w-[10rem] 2xl:w-56 2xl:h-36 sm:h-[7.5rem]'>
      <div className='h-3/4  relative rounded-t-md w-full'>
      <img className='w-full rounded-t-md h-full shrink-0 object-cover' src={vidthumb} alt="" loading="lazy"/>
      <img src={imageoverlay} className='absolute w-full h-full top-0' alt="" loading="lazy"/>
      <img src={playicon} className='absolute top-10 left-20 w-1/6' alt="" loading="lazy"/>
      </div>
      

      <div>
        <p className='px-2 py-2 text-gray-800 text-[0.8rem] whitespace-nowrap'>{title}</p>
      </div>
    </div>
  )
}

export default VideoCard