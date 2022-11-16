import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Animation404 from '../components/animaition404';

export default function PageNotFound(){
    return(
        <>
            <Head>
                <title>Chihyun-Oh</title>
                 <meta name="description" content="Chihyun-Oh" />
                   <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-primary h-screen w-screen flex justify-center items-center">
                <Link href="/">
                    <div className=" cursor-pointer">
                        <Animation404/>
                    </div>
                </Link>
            </div>
        </>
    );
}