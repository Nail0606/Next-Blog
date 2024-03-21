"use client";
import Link from "next/link";
import Image from "next/image";

interface PostType {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

interface Props {
  data: PostType;
}

export default function FeaturedPost({ data }: Props) {
  return (
    data && (
      <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
        <Link href={`/posts/${data.path}`}>
          <Image
            src={`/images/${data.path}.png`}
            alt="포스트이미지"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="text-center">
            <p className="text-right mr-2 text-gray-500 text-sm">{data.date}</p>
            <h1 className="font-bold">{data.title}</h1>
            <p>{data.description}</p>
            <span className="bg-yellow-50 rounded-md p-1">{data.category}</span>
          </div>
        </Link>
      </div>
    )
  );
}
