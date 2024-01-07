import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"Jangsu's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header;
