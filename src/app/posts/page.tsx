import Post from "@/components/Post";
import { PostType } from "../page";

export default async function PostsPage() {
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
    <div className="flex justify-center mt-10 ">
      <div className="grid grid-cols-3 gap-4 w-2/3 ">
        {mockPostData.map((post, index) => {
          return <Post data={post} key={`posts ${index}`} />;
        })}
      </div>
      <div className="ml-28">
        <h1 className="border-solid border-b-2 border-black font-bold">
          Category
        </h1>
        <p>All Posts</p>
        <p>My story</p>
        <p>FrontEnd</p>
        <p>BackEnd</p>
        <p>javascript</p>
      </div>
    </div>
  );
}
