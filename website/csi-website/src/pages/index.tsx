import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Bodycontainer from '@/components/Bodycontainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>CSI</title>
            </Head>
            <Navbar>
                
            </Navbar>
            <Bodycontainer>

            </Bodycontainer>
        </>
    )         
}
