import Image from "next/image";
import Link from "next/link";
import { unkempt } from "./fonts";

export default function Home() {
  return (
   
    <section className="grid items-center w-3/4	m-auto grid-cols-2 h-96">
      <article>
        <h1 className="text-3xl	text-amber-950	">
          Design your <br /> Wardrop
        </h1>
        <p className="text-xl my-5 text-cyan-950	">
          Create capsulas, looks , make your <br /> own wardrop
        </p>
        <Link href="/capsules" className="bg-red-50	p-4 my-5 inline-block	rounded"> Create Capsule</Link>
      </article>
      <article className="block relative">
        <Image
          src="/zara-studio-collection-1.avif"
          alt="womens in nature"
          className="relative" width={900} height={850}
        />
        <Image
          src="/women-poster.jpg"
          alt="women"
          className="absolute ranslate-y-6 top-64 -left-1/4" width={250} height={250}
        />
      </article>
    </section>
  );
}
