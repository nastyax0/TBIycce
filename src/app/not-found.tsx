"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-start bg-white px-6 pt-10 pb-6 text-center text-gray-800">
      <Image
        src="/images/404-illustration.svg"
        alt="404 illustration"
        width={400}
        height={400}
        className="w-full max-w-md mb-6"
      />

      <p className="text-2xl md:text-3xl font-semibold">Page Not Found</p>
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you&#39;re looking for doesn&#39;t exist. If you think
        this is a mistake, feel free to reach out.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <button className="px-6 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition">
            Go Home
          </button>
        </Link>
        <a href="mailto:akanksha.sawant32@gmail.com">
          <button className="px-6 py-2 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-50 transition">
            Contact Developer
          </button>
        </a>
      </div>
    </div>
  );
}
