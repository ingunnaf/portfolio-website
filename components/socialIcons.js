import SocialIcon from "./socialIcon";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function SocialIcons({
  }) {
    return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-rose-900 pb-10">
        <SocialIcon icon={AiFillMail} link="mailto:ingunn.flovig@gmail.com"></SocialIcon>
        <SocialIcon icon={AiFillGithub} link="https://github.com/ingunnaf"></SocialIcon>
        <SocialIcon icon={AiFillLinkedin} link="https://www.linkedin.com/in/ingunnflovig/"></SocialIcon>
    </div>
    );
}