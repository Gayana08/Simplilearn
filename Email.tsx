"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Email() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit} className="flex justify-center px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl">
          <div className="flex items-center gap-2 border rounded-md p-3 w-full sm:w-[500px]">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work mail to confirm your attendance"
              className="flex-1 outline-none bg-transparent text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="border-0 bg-[#F5AB40] text-black font-bold py-3 px-6 rounded w-full sm:w-auto"
          >
            {status === "loading" ? "Submitting..." : "RSVP Now"}
          </button>
        </div>
      </form>

      {status === "success" && (
        <p className="text-green-500 text-center mt-2">
          Thank you! Your email has been submitted.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-center mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
