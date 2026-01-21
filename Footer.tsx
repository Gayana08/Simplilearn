import { FaEnvelope } from "react-icons/fa";
import Email from "./Email";

export default function Footer() {
  return (
    <section
      className="relative h-[350px] w-full bg-[url('/images/Mask.png')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 md:px-16">
        
        {/* Top text */}
        <h2 className="text-white text-2xl font-bold">
          Space is limited.
        </h2>

        {/* Input + Button */}
        <div className="flex max-w-3xl flex-col gap-3 sm:flex-row">
          <Email />
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start justify-between gap-2 text-white md:flex-row md:items-center">
          <img className="" src={"/images/new_logo2.png"}></img>
          <p className="text-xs opacity-80">
            © 2009–2025 - Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}