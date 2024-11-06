import { X } from "lucide-react";
import Link from "next/link";

type Props = {
    open: boolean;
    onClose: () => void;
}

const MobileNav = ({ open, onClose }: Props) => {
    return (
        <div className={`fixed w-full bg-ga-white-light1 top-0 left-0 lg:hidden transition-all duration-500 z-50 h-screen p-6  ${open ? 'animate-slideInFromLeft visible dark:bg-black bg-blue-50' : 'animate-slideOutToLeft'}`}>
            <div className="flex items-center justify-between">
                <Link href="/" onClick={onClose} className="font-bold text-lg hover:animate-bounce-slow">
                    Pamela
                </Link>
                <span onClick={onClose} className="flex items-end justify-end dark:hover:bg-zinc-900 hover:bg-[#e1f0f7] cursor-pointer"><X /></span>
            </div>
            <div className="flex flex-col gap-7 h-full items-center justify-center">
                {/* <Link className="dark:hover:text-[#e1f0f7] hover:text-black" href="/about">
                    About Me
                </Link> */}
                <Link className="dark:hover:text-[#e1f0f7] hover:text-black" href="/projects">
                    Projects
                </Link>
                <Link className="dark:hover:text-[#e1f0f7] hover:text-black" href="mailto:iwumeziep@gmail.com" target="_blank">Contact me</Link>
            </div>
        </div>
    )
}

export default MobileNav;