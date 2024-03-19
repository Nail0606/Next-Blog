import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="flex-col mx-auto text-center w-1/3">
      <h1 className="font-bold text-2xl">Contact me</h1>
      <p>c9010912@gmail.com</p>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <FaGithub size="40" />
        <SiGmail size="40" />
        <FaYoutube size="40" />
      </div>
      <h1 className="font-bold text-2xl mt-10"> Or Send me an Email</h1>
      <form
        name="SendEmail"
        className="flex flex-col mt-10 bg-slate-700 rounded-lg text-left p-3 text-white font-bold"
      >
        <p>Your Email</p>
        <input type="text" name="yourEmail" className="text-black" />
        <p>Subject</p>
        <input type="text" name="subject" className="text-black" />
        <p>Message</p>
        <textarea name="message" className="h-80 text-black" />
        <input
          type="submit"
          value="Submit"
          className=" font-sans bg-yellow-300 mt-1 text-black"
        />
      </form>
    </div>
  );
}
