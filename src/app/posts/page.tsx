import Post from "@/components/Post";
import { PostType } from "../page";
import CategorySelect from "@/components/CategorySelect";
import Posts from "@/components/Posts";

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
      <Posts postData={mockPostData} />
    </div>
  );
}
