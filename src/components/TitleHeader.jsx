import React from 'react'

const TitleHeader = ({title,sub}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className='hero-badge text-lg md:text-2xl'>
            <p>
                {sub}
            </p>
        </div>
        <div className='font-semibold mt-3 text-xl md:text-4xl text-center'>
            {title}
        </div>
    </div>
  )
}

export default TitleHeader