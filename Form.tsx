
// import { FaEnvelope } from "react-icons/fa";

export default function Email() {
  return (
    <div className="m-4">
      {/* <div className="flex justify-center px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl">
          <div className="flex items-center gap-2 border rounded-md p-3 w-full sm:w-[500px]">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="Enter your work mail to confirm your attendance"
              className="flex-1 outline-none bg-transparent text-sm sm:text-base"
            />
          </div>

          <button className="border-0 bg-[#F5AB40] text-black font-bold py-3 px-6 rounded w-full sm:w-auto">
            RSVP Now
          </button>
        </div>
      </div> */}

      <div className="m-4 p-4">
        <div className="mx-auto">
          <p className="text-left leading-relaxed text-lg sm:text-[24px]">
            AI is accelerating change across every operational layer. Roles are
            shifting. Leadership models are collapsing and reforming. Frontline
            and mid-level managers will soon lead teams of people and intelligent
            agents.
          </p>
        </div>

        <div className="mx-auto m-5">
          <p className="text-lg sm:text-[24px]">
            But even the most advanced enterprises are asking the same question:
          </p>
        </div>

        <div className="m-5">
          <h1 className="text-center font-bold text-2xl sm:text-4xl">
            Which capabilities will matter most,
            <br />
            and how do we build them at scale?
          </h1>
        </div>

        <div className="m-5">
          <p className="text-left sm:text-[24px]">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise
            workforce leaders for a candid, senior-level discussion on what’s
            coming next.
          </p>
        </div>
      </div>
    </div>
  );
}
