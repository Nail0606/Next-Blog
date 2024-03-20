import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";
import MainCarousel from "@/components/MainCarousel";
import Post from "@/components/Post";

interface PostType {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export default async function HomePage() {
  // const mockPostData = require("/public/posts/posts.json");
  // console.log(mockPostData);

  const testDataFetch = async () => {
    return await fetch("http://localhost:3000/posts/posts.json")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const mockPostData: PostType[] = await testDataFetch();

  return (
    <div className="flex-col">
      <div className="mx-auto my-1 w-60 text-center">
        <Image src={profileImage} alt="profile" className="rounded-full" />
        <h1 className="text-2xl font-bold mt-1">제주당근오렌</h1>
        <h1 className="font-bold">Web FrontEnd Enginner</h1>
        <p className="mb-1">안녕하세요! 잘 부탁드립니다!</p>
        <Link
          href="/contact"
          className="bg-amber-400 px-3 py-1 font-bold rounded-lg"
        >
          Contact Me!
        </Link>
      </div>
      <div className="mx-20">
        <h1 className="font-bold text-3xl">Featured Posts</h1>
        <div className="grid grid-cols-3 gap-4">
          {mockPostData.map((post, index) => {
            return <Post data={post} key={`post ${index}`} />;
          })}
        </div>
      </div>
      <div className="mx-20 mt-5">
        <h1 className="font-bold text-3xl">You May Like</h1>
        <MainCarousel></MainCarousel>
      </div>
    </div>
  );
}
