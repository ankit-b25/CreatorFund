import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white flex justify-center items-center px-4 h-10">
      <p className='text-center'>Copyright &copy; {currentYear} Get Me A Chai - All Rights Reserved!</p>
    </footer>
  )
}

export default Footer
