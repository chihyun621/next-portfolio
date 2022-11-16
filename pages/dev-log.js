import Layout from "../components/layout";
import Head from 'next/head';

export default function Devlog(){
    return(
        <Layout>
            <Head>
                <title>Chihyun-Oh</title>
                <meta name="description" content="Chihyun-Oh" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>
                개발일지<br/>
                2022-11-16(수)
                - 첨부 파일 다운로드 추가<br/>
                - 첨부 파일 Link 없을 경우 숨긴 기능<br/>
                - Github Link 없을 경우 숨긴 기능<br/>

                2022-11-12(토)<br/>
                - 404페이지 애니메이션 추가<br/>
                - 404페이지 CSS수정<br/>
                
                2022-11-11(금)<br/>
                - Github에 업로드<br/>
                - Vercel 통한 배포v
                - 정리<br/>
                
                2022-11-10(목)<br/>
                - Project 화면<br/>
                
                2022-11-09(수)<br/>
                - 노션 API 설정<br/>
                - Postman 설치<br/>
                - 노션 API 파싱<br/>
                
                2022-11-08(화)<br/>
                - Link 설정<br/>
                - Dark Mode<br/>
                
                2022-11-07(월)<br/>
                - 개발환경 셋팅<br/>
                - Layout (header, footer, 404, projects, hero)<br/>
                - 디자인<br/>
                </p>
            </div>
        </Layout>
    );
}