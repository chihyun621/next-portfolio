import Image from "next/image";
import { Result } from "postcss";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0]?.plain_text
    const githubLink = data.properties.Github.url
    const description = data.properties.Description.rich_text[0]?.plain_text
    const imgSrc = data.cover?.file?.url || data.cover?.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkpPeriod.date?.start
    const end = data.properties.WorkpPeriod.date?.end
    const file = data.properties.File.files[0]?.file?.url

   console.log(githubLink)
    return(
        <div className="project-card">

            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end}
                </p>
                {
                    githubLink ? <a href={githubLink}>Github 바로가기</a> : <div className="hidden"></div>
                }
                {
                    file ? <a href={file}>첨부파일 다운로드</a> : <div className="hidden"></div>
                }
            </div>

            <div className="grid grid-cols-3 m-2 gap-1  ">
                {tags.map((aTag) => (
                    <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                ))}
            </div>
        </div>
    );
}