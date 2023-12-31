import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.png';

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Profile"
        width={250}
        height={250}
        priority
      />
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I'm subin"}</h2>
      <h3 className="text-xl font-semibold ">Front Engineer</h3>
      <p>성장하고싶은 개발자</p>
      <Link href="/contact">
        <button className="mt-2 rounded-xl bg-yellow-500 px-4 py-1 font-bold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
