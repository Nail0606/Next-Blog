"use client";

import postTestImage from "../../public/images/review-2023.png";
import Image from "next/image";

export default function FeaturedPost() {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
      <Image src={postTestImage} alt="포스트이미지" />
      <p>포스트 날짜</p>
      <h1 className="font-bold">포스트 제목</h1>
      <p>포스트 설명</p>
      <p>포스트 태그</p>
    </div>
  );
}
