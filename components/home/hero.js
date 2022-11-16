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
                    본 사이는 개인 포트폴리오를 쉬운 관리 및 접근성을 생각하여 개발하였습니다. 추가 개발 내역은 Log에 Project보기는 Project로 가시면 됩니다. 
                </p>
                <div className="flex justify-center">

                    <Link href="/projects">
                        <a className="btn-project">
                            Project
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