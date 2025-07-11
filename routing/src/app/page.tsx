import Link from "next/link";

export default function Home() {
  return (


    <div>

      <h1>Welcome to home page!</h1>

      <div className="flex flex-col gap-3">

        <Link href="/about" className="w-fit text-blue-500">About</Link>

        <Link href="/blog" className="w-fit text-blue-500">Blog</Link>

        <Link href="/products" className="w-fit text-blue-500">Products</Link>
        
      </div>



      <h1 className="mt-6">Language</h1>

      <div className="flex flex-col gap-4">

        <Link className="w-fit text-blue-500" href="/articles/breaking-news-123?lang=en">
          Read in English
        </Link>

        <Link className="w-fit text-blue-500" href="/articles/breaking-news-123?lang=fr">
          Read in French
        </Link>
        
      </div>

    </div>

  );
}
