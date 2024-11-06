"use client";

import GithubIcon from "@/svg/GithubIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import LinkedInIcon from "@/svg/LinkedInIcon";
import FacebookIcon from "@/svg/FacebookIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import YoutubeIcon from "@/svg/YoutubeIcon";
import { MailMinus } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
    const { theme } = useTheme();

    const color = theme === "light" ? "black" : "#A7D4EE";
   
    return (
        <footer className="padding-container max-container flex flex-col md:flex-row justify-between gap-4 items-center py-10 border-t border-zinc-900">
            
            <div className="flex gap-4 items-center justify-center">
                <Link href="https://github.com/Iwumezie-pamela"  target="_blank">
                    <GithubIcon color={color} />
                </Link>
                <Link href="https://www.linkedin.com/in/iwumezie-pamela-b090ba225/" target="_blank">
                    <LinkedInIcon color={color} />
                </Link>
                <Link href="https://x.com/pame_llar" target="_blank">
                    <TwitterIcon color={color} />
                </Link>
                <Link href="https://www.youtube.com/@Pame-llar" target="_blank">
                    <InstagramIcon color={color} />
                </Link>
                <Link href="https://web.facebook.com/chinwendu.pamela.10" target="_blank">
                    <FacebookIcon color={color} />
                </Link>
                <Link href="https://www.youtube.com/@Pame-llar" target="_blank">
                    <YoutubeIcon color={color} />
                </Link>
            </div>
            <Link href="mailto:iwumeziep@gmail.com" className="dark:text-[#A7D4EE] text-black flex gap-4"><MailMinus />iwumeziep@gmail.com</Link>
        </footer>
    )
}

export default Footer;