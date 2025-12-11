"use client";
import { EMAIL, PHONE } from "@/constants/constants";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      <div className="text-center space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
        {"I am always open to collaborating or talking about ideas."} <br />
        You can reach me at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-green-600 dark:text-green-400 underline hover:opacity-80"
        >
          {EMAIL}
        </a>
        {" or call me at "}
        <span className="text-green-600 dark:text-green-400">{PHONE}</span>.
      </div>
    </div>
  );
}

export default Contact;
