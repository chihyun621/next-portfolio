import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요.<br/> 
                    개발자 오치현입니다!
                </h1>
                <p className="mb-8 leading-relaxed">
                    붙잡아 그들은 청춘에서만 열매를 밥을 용기가 철환하였는가? 가는 하는 이상 우리 인생의 철환하였는가? 길지 찾아다녀도, 모래뿐일 뛰노는 것이다. 끝에 끝까지 열락의 있는가? 되려니와, 두기 목숨을 못할 하였으며, 칼이다. 새가 싹이 이성은 내려온 뜨거운지라, 밝은 사랑의 방황하여도, 너의 것이다. 풍부하게 보이는 생명을 따뜻한 것은 새가 꽃이 트고, 끓는 봄바람이다. 만천하의 같이, 소리다.이것은 위하여 청춘이 얼음에 들어 보는 않는 위하여서. 얼음 석가는 커다란 봄바람이다.
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