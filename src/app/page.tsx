import Image from "next/image";
import profileImage from "../../public/images/profile.png";

export default function AA() {
  return (
    <div className="">
      <Image
        src={profileImage}
        alt="profile"
        className="mx-auto my-1 rounded-full w-60"
      ></Image>
    </div>
  );
}
