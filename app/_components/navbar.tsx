"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import searchIcon from "../../public/search.svg";

export function Navbar() {
  const [isSearching, setIsSearching] = useState(false);

  function handleOpenSearch(e: KeyboardEvent) {
    if (e.key === "s") {
      setIsSearching(true);
    }
  }

  function handleEscapeSearch(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setIsSearching(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleOpenSearch);

    if (isSearching) {
      document.addEventListener("keyup", handleEscapeSearch);
    }

    return () => {
      document.removeEventListener("keyup", handleEscapeSearch);
      document.removeEventListener("keyup", handleOpenSearch);
    };
  });

  return (
    <nav className="flex h-[84px] w-[700px] items-center justify-between rounded-lg bg-white px-[24px]">
      <Link href={"/"} className="text-2xl text-black">
        BennyFinance
      </Link>

      {isSearching ? (
        <input
          type="text"
          className="w-[270px] rounded-2xl border-2 border-black p-2 text-black transition-all duration-1000 hover:bg-gray-100"
          placeholder="Search"
          autoFocus
        />
      ) : (
        <div className="flex min-w-[140px] items-center justify-between">
          <Link
            href={"/about"}
            className="text-lg text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href={"/logout"}
            className="text-lg text-gray-700 hover:text-gray-900"
          >
            Logout
          </Link>
        </div>
      )}
      <button
        name="search"
        className="cursor-pointer rounded-md p-2 transition-all duration-1000 hover:bg-gray-100"
        onClick={() => setIsSearching(!isSearching)}
      >
        <Image
          priority
          height={24}
          width={24}
          src={searchIcon}
          alt="search icon"
          className="stroke-gray-700"
        />
      </button>

      {/* dashboard button */}
      <Link
        href={"/dashboard"}
        className="rounded-lg bg-black px-4 py-3 text-lg text-white hover:bg-gray-900"
      >
        Dashboard
      </Link>
    </nav>
  );
}
