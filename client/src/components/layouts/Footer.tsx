import React from 'react'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './SvgIcons'

const Footer = () => {
  return (
    <div className='mb-24 sm:mb-0 mt-4 container bg-slate-50 h-32 bottom-0 p-2 rounded-t-lg'>
      <div className='h-full container flex flex-col justify-center items-center '>
        <div className='flex gap-8 px-4 md:px-0 mb-2 text-indigo-500'>
          <a
            target='_blank'
            href='https://github.com/philipjonlewis'
            className=' hover:text-orange-500 dark:hover:text-blue-500 cursor-pointer'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>

          <a
            target='_blank'
            href='https://www.linkedin.com/in/philipjonlewis/'
            className=' hover:text-orange-500 dark:hover:text-blue-500 cursor-pointer'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            target='_blank'
            href='https://twitter.com/__jonlewis'
            className=' hover:text-orange-500 dark:hover:text-blue-500 cursor-pointer'
            rel='noreferrer'
          >
            <TwitterIcon />
          </a>
        </div>
        <p className='text-sm'>philipjonlewis@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
