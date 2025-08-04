import React from 'react'

const Title = ({text1,text2,noLeftLine = false}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
       {!noLeftLine &&(
<p className=' bg-gray-700 sm:h-[3px] h-[4px] w-8 sm:w-12'></p>
)}
  <p className='text-gray-500 text-3xl'>{text1}  <span className='text-gray-700 font-medium'>{text2}</span></p>
<p className=' bg-gray-700 sm:h-[3px] h-[4px] w-8 sm:w-12'></p>
    </div>
  )
}

export default Title;





