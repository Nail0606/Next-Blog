import Link from "next/link";
import Image from "next/image";
import profileImage from "../../../public/images/profile.png";

export default function AboutPage() {
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
      <div className="mx-20 my-8 py-10 bg-gray-200 text-center">
        <h1 className="text-xl font-bold">Who am I?</h1>
        <p>동양미래대학교 4학년 재학중인 조민기입니다.</p>
        <p>JavaScript, React, Next 등을 사용하여 웹앱을 만들고 있습니다.</p>
        <h1 className="text-xl font-bold">Carrer</h1>
        <p>동양미래대학교 4학년 재학중인 조민기입니다.</p>
        <p>JavaScript, React, Next 등을 사용하여 웹앱을 만들고 있습니다.</p>
        <h1 className="text-xl font-bold">Skills</h1>
        <p>React, JavaScript, TypeScript, Express.js Next.js</p>
        <p>Node, Git, Mysql</p>
      </div>
    </div>
  );
}
