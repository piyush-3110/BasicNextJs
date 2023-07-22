"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const { push } = useRouter();
  const [inputVal, setInputVal] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
  return (
    <>
      <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <div>
          <div>
            <h1>Enter your name</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
          >
            <input
              class="text-black m-2"
              type="text"
              placeholder="type your name"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button>Predict Data</button>
          </form>
        </div>
      </div>
    </>
  );
}
