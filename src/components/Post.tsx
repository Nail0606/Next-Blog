"use client";
import Link from "next/link";
import postTestImage from "../../public/images/review-2023.png";
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
  console.log(data);
  return (
    <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
      <Link href={`/${data?.path}`}>
        <Image src={postTestImage} alt="포스트이미지" />
        <p>{data.date}</p>
        <h1 className="font-bold">{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.category}</p>
      </Link>
    </div>
  );
}
