import Post from "@/components/Post";

export default function PostsPage() {
  const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="flex justify-center mt-10 ">
      <div className="grid grid-cols-3 gap-4 w-2/3 ">
        {testArr.map(() => {
          return <Post />;
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
