"use client";
import { useState } from "react";
import { PostType } from "@/app/page";
import CategorySelect from "./CategorySelect";
import Post from "./Post";

interface Props {
  postData: PostType[];
}

export default function Posts({ postData }: Props) {
  const categoryArray = [
    "All Posts",
    "my story",
    "frontend",
    "backend",
    "javascript",
  ];
  const [seletedCategory, setSelectedCategory] = useState(0);

  if (seletedCategory !== 0) {
    postData = postData.filter((post) => {
      return post.category === categoryArray[seletedCategory];
    });
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-4 w-2/3">
        {postData.map((post, index) => {
          return <Post data={post} key={`posts ${index}`} />;
        })}
      </div>
      <CategorySelect
        categoryArray={categoryArray}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}
