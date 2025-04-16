import logo from '../assets/logo.png';
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
      <nav className='flex justify-between'>
        <img src='logo.png' className='ml-7 w-40'></img>

        <ul className="flex justify-end items-center">
            <li className="mr-7"><Link href='./'>Home</Link></li>
            <li className="mr-7"><Link href='./about'>About</Link></li>
            <li className="mr-7"><Link href='./events'>Events</Link></li>
        </ul>
      </nav>
    );
  }