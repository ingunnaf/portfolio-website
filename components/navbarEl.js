import { Link, animateScroll as scroll } from "react-scroll";


export default function NavbarEl({
    name,
    linksTo, 
}) {
    return (
    <div className="hover:text-indigo-700 hover:scale-110 transition duration-300 ease-in-out text-rose-900">
        <Link className="text-2xl bg-gradient-to-r px-4 py-2 border-none rounded-md ml-8"
            to={linksTo}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            {name}
        </Link>
    </div>);
}