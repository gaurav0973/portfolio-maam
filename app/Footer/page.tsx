import { NAME } from "@/constants/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-8 text-center text-slate-500 dark:text-gray-600 font-mono text-sm">
      <div className="flex justify-center items-center space-x-4">
        <div className="">
          <div>
            <p>
              ©{new Date().getFullYear()} - {NAME}
            </p>
          </div>
          <div>
            <Link
              href="https://github.com/GITSHUBROHI"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-700 dark:hover:text-gray-400 transition"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
