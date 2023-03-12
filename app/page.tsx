import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <div>
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
        <h1 className="text-3xl mt-2 font-bold text-black mb-5 text-center">
          Welcome to the Amazon Web Scraper!
        </h1>

        <h2 className="text-lg italic text-center text-black/50">
          To see code for this project, please visit{" "}
        </h2>
        <h3 className="text-lg text-center italic text-black/50">
          <Link href={"/"}>Github</Link>
        </h3>
      </div>
    </div>
  );
}

export default HomePage;
