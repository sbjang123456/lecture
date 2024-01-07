import type { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import ContactForm from 'components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'JangSu 메일 보내기',
};

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];
export default function page() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="my-2 text-3xl font-bold">Contact Me</h2>
      <p>sbjang123456@gmail.com</p>
      <ul className="my-2 flex gap-4">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="my-8 text-3xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
