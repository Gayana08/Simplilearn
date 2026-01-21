import { FaEnvelope } from "react-icons/fa";
import Email from "./Email";

export default function Example() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Left heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5AB40] mb-6">
            Go behind the curtain with real <br></br>examples and high-scale insights
          </h2>

          <p className="text-lg font-semibold text-gray-800">
            You’ll walk away with:
          </p>
        </div>

        {/* Right content */}
        <div className="space-y-6 mt-[3rem] bg-[url('/images/horse.png')] bg-right bg-no-repeat bg-contain">
          
          {/* Item */}
          <div className="flex gap-[5rem]">
            <span className="w-1 bg-[#C49A3A] rounded"></span>
            <p className="text-700">
              A clear view of the leadership & workforce capabilities that will
              matter most over the next 24–36 months.
            </p>
          </div>

          <div className="flex gap-[5rem]">
            <span className="w-1 bg-[#C49A3A] rounded"></span>
            <p className="text-700">
              Insights from high-scale operating environments including the
              former CLO of McDonald’s on what truly scales and what breaks
              under pressure.
            </p>
          </div>

          <div className="flex gap-[5rem]">
            <span className="w-1 bg-[#C49A3A] rounded"></span>
            <p className="text-700">
              Signals for where capability gaps may already be forming in your
              organization.
            </p>
          </div>

          <div className="flex gap-[5rem]">
            <span className="w-1 bg-[#C49A3A] rounded"></span>
            <p className="text-700">
              Peer-validated perspectives from leaders running workforce,
              talent, and transformation ecosystems at scale.
            </p>
          </div>

          <div className="flex gap-[5rem]">
            <span className="w-1 bg-[#C49A3A] rounded"></span>
            <p className="text-700">
              Actionable insights you can take straight into your next exec
              meeting.
            </p>
          </div>

        </div>
      </div>
      <div className="flex mt-[3rem] px-4">
                  {/* <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex items-center gap-2 border rounded-md p-3 w-full sm:w-[500px]">
                      <FaEnvelope className="text-gray-400" />
                      <input
                          type="email"
                          placeholder="Enter your work mail to confirm your attendance"
                          className="flex-1 outline-none"
                      />
                      </div>
      
                      <button className="border-0 bg-[#F5AB40] text-black font-bold py-3 px-6 rounded">
                      RSVP Now
                      </button>
                  </div> */}

                  <Email />
                  
                </div>
    </section>
  );
}