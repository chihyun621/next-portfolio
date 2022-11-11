import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요.<br/> 
                    개발자 오치현입니다.
                </h1>
                <p className="mb-8 leading-relaxed">
                    개발에 즐거며 백엔드 개발자를 목표로 하고 있는 개발자 오치현입니다.    
                </p>
                <div className="flex justify-center">

                    <Link href="/projects">
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                    
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}