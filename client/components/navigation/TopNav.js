import React, { useState } from 'react';
import Link from "next/link"

const TopNav = () => {
    const [expanded, setExpanded] = useState('hidden');

    const handleButton = () => {
        if (expanded === 'hidden') {
            setExpanded('');
        } else {
            setExpanded('hidden')
        }     
    }

    return (
        <nav className="container-2xl flex  px-10 py-5 items-center bg-rose-400 relative">
            <h1 className="text-xl text-gray-800 font-bold font-mono flex-1">Tutorials Pointe</h1>
            <ul className="hidden md:flex flex-row justify-end w-full text-lg font-mono">
                <li className="px-2 mx-1">
                    <Link href={`/`}>
                        <a className="hover:text-fuchsia-500 font-bold">Home</a>
                    </Link>
                </li>
                <li className="px-2 mx-1">
                    <Link href={`/login`}>
                        <a className="hover:text-fuchsia-500 font-bold">Login</a>
                    </Link>
                </li>
                <li className="px-2 mx-1">
                    <Link href={`/register`}>
                        <a className="hover:text-fuchsia-500 font-bold">Register</a>
                    </Link>
                </li>
            </ul>
            <div className="md:hidden flex items-center self-center ">
				<button className="outline-none mobile-menu-button" onClick={handleButton}>
					<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
						x-show="!showMenu"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
					    <path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
            <div hidden={expanded} >
                <ul className="absolute top-16 left-0 w-full flex flex-col bg-rose-400/30 backdrop-blur-3xl py-2">
                    <li className="text-center">
                        <Link href="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                            <a className="hover:text-fuchsia-500 font-bold">Home</a>
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/login" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                            <a className="hover:text-fuchsia-500 font-bold">Login</a>
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/register" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                            <a className="hover:text-fuchsia-500 font-bold">Register</a>
                        </Link>
                    </li>
				</ul>
            </div>
        </nav>
        
    )
}

export default TopNav
