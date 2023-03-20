import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className={inter.className}>Explore the Next.js 13 playground.</p>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
