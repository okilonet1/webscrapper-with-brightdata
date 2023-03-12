"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FormEvent, useRef } from "react";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;

    if (!input) return;
    if (inputRef.current?.value) inputRef.current.value = "";

    try {
      // TODO: Add search functionality
      //   /api/activateScraper?searchTerm=${input}
    } catch (error) {
      // TODO: Add error handling
      console.error(error);
    }
  };

  return (
    <header>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md"
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300"
        />
        <button hidden>Search</button>
        <MagnifyingGlassIcon className="h6 w-6 text-indigo-300" />
      </form>
    </header>
  );
}

export default Header;
