import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function AA() {
  return (
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
  );
}
