import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="mt-2 mb-3 text-3xl leading-8 font-extrabold tracking-tight text-teal-600 sm:text-4xl">CampusFindDTU</p>
          <h2 className="text-base mt-3 text-white font-semibold tracking-wide">Login to start finding what you lost below</h2>
          <img src="https://res.cloudinary.com/dpslrv5a3/image/upload/v1711995523/jcetglzgcyxmg31mwkkx.jpg" />
          <h2 className="text-base mt-3 text-white font-semibold tracking-wide">Don&apos;t have an account?&nbsp;
          <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
            Signup for free
          </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default LandingPage