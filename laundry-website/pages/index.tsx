import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import ResponsiveHeader from '../components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
        <ResponsiveHeader/>
        <h1> Home page/route </h1>
        
        <ul className='home-list'>
            <li className='home-listItem'>
                <Link id="about" href="/"> About </Link>
            </li>
            <li className='home-listItem'>
                <Link href="/blog"> Blog </Link>
            </li>
            <li className='home-listItem'>
                <Link href="/docs"> Docs </Link>
            </li>
            <li className='home-listItem'>
                <Link href="/product"> Products </Link>
            </li>
        </ul>
        </>
    );
}