import Layout from "../components/layout";
import Head from "next/head";

export default function AboutMe(){
    return(
        <Layout>
            <Head>
                <title>Chihyun-Oh</title>
                <meta name="description" content="Chihyun-Oh" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>About Me</h1>
            </div>
        </Layout>
    );
}