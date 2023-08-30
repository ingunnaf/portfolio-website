export default function SocialIcon({
    link,
    icon: Icon, 
}) {
    return (
    <div className="hover:text-indigo-700 hover:scale-110 transition duration-300 ease-in-out">
        <a href={link}><Icon /></a>
    </div>);
}

