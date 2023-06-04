import React from 'react'

function VideoModal({vidLink, videoModal, setvideoModal}) {
  return (
    <>

<div onClick={()=>setvideoModal(!videoModal)} className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
<div className="absolute h-full w-full bg-black opacity-80 inset-0 -z-10"></div>
<div className='relative w-full h-screen justify-center items-center flex p-10'> 
      <iframe className='absolute z-20 w-80 h-56 sm:w-[500px] sm:h-80'
        src={vidLink}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        width=''
        height=''
        title="video"
        loading="lazy"
      />
</div>
</div>
</>
  )
}

export default VideoModal