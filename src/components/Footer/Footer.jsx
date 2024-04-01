import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
   <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div className="text-left flex flex-col">
            <h2 className="text-white text-lg font-semibold mb-4">Lost and Found Application</h2>
            <h2 className="text-white text-lg font-semibold mb-4">QuickTip1 :</h2>
            <p className="mb-4">
                If you lost your item, post it under Lost Items section by selecting lost-item option
            </p>
            </div>
            <div className="text-left flex flex-col">
            <h2 className="text-white text-lg font-semibold mb-4">Disclaimer : Just a fun project</h2>
            
            <h2 className="text-white text-lg font-semibold mb-4">QuickTip2 :</h2>
            <p className="mb-4">
                If you found someone&apos;s lost item, post it under Found Items section by selecting found-item option
            </p>
            </div>
            
            <div className="flex flex-col text-justify">
            <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
            <div className="flex space-x-4">
                <a
                target="_blank"
                href="https://www.linkedin.com/in/lakshay-nijhawan-818419124/"
                className="hover:text-white transition-colors duration-300"
                >
                Linkedin
                </a>
                
            </div>
            <p>New Delhi, India</p>
            <p>nijhawanlakshay06@gmail.com</p>
            <p>Phone: (+91) 8287403276</p>
            </div>
            <div className='text-justify'>
            <h2 className="text-white text-lg font-semibold mb-4">My Coding Profiles</h2>
            <ul>
                <li>
                <a
                target="_blank"
                href="https://github.com/Lakshay-Codes"
                className="hover:text-white transition-colors duration-300"
                >
                GitHub
                </a>
                </li>
                <li>
                <a
                    target="_blank"
                    href="https://leetcode.com/nijhawanlakshay06/"
                    className="hover:text-white transition-colors duration-300"
                    >
                    LeetCode
                </a>
                </li>
                <li>
                <a
                    target="_blank"
                    href="https://www.codechef.com/users/nijhawan3codes"
                    className="hover:text-white transition-colors duration-300"
                    >
                    CodeChef
                </a>
                </li>
                <li>
                <a
                    target="_blank"
                    href="https://codeforces.com/profile/Lakshay-Codes"
                    className="hover:text-white transition-colors duration-300"
                    >
                    CodeForces
                </a>
                </li>
                <li>
                <a
                    target="_blank"
                    href="https://auth.geeksforgeeks.org/user/nijhawanlakshay06"
                    className="hover:text-white transition-colors duration-300"
                >
                    GeeksForGeeks
                </a>
                </li>
            </ul>
            </div>
        </div>
        <p className="text-center text-xs pt-8">Lakshay Nijhawan © 2024. All rights reserved.</p>
    </footer>
  )
}

export default Footer