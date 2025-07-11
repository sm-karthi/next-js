import Link from "next/link";

export default function NewsArticles({ params, searchParams }: {
    params: { articlesId: string };
    searchParams: { lang?: "en" | "fr" | "es" };
}) {

    const { articlesId } = params;
    const { lang = "en" } = searchParams


    return (
        <div>

            <h1>News articles {articlesId}</h1>
            
            <p>Reading in {lang}</p>

            <div className="flex flex-col gap-4 text-blue-500">

                <Link href="/">Home</Link>

                <Link href={`/articles/${articlesId}?lang=en`}>English</Link>

                <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>

                <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>


            </div>

        </div>
    )

}