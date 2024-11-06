import Link from "next/link";

const Appreciation = () => {
    return (
        <div className="padding-container mt-10 text-center flex justify-center flex-col items-center">
        <p className="text-medium md:text-2xl font-semibold w-full md:max-w-[710px] dark:bg-gradient-to-tr from-[#f6f3d2] via-green-50 to-purple-50 bg-clip-text dark:text-transparent text-gray-600">
        I&apos;m excited to connect! Let&apos;s explore opportunities to collaborate, learn, and create something impactful together. Reach out anytime{" "}
          <Link href="mailto:iwumeziep@gmail.com" target="_blank">
          iwumeziep@gmail.com
          </Link>{" "}
        </p>
      </div>
    )
}

export default Appreciation;