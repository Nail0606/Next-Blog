import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="flex-col mx-auto text-center w-1/3">
      <h1 className="font-bold text-2xl">Contact me</h1>
      <p>c9010912@gmail.com</p>
      <div className="flex justify-center items-center space-x-4">
        <FaGithub />
        <SiGmail />
        <FaYoutube />
      </div>
      <h1 className="font-bold text-2xl"> Or Send me an Email</h1>
      <form
        name="SendEmail"
        className=" bg-slate-700 rounded-lg text-left p-3 text-white font-bold"
      >
        <p>Your Email</p>
        <input type="text" name="yourEmail" />
        <p>Subject</p>
        <input type="text" name="subject" />
        <p>Message</p>
        <textarea name="message"></textarea>
        <button type="submit" value="Submit" />
      </form>
    </div>
  );
}
