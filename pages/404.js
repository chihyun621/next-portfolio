import Link from 'next/link';
import React from 'react'
import Animation404 from '../components/Animaition404';

export default function PageNotFound(){
    return(
        <>
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