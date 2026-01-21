export default function Navbar() {
  return (
    <div
      className="bg-[url('/images/shutter.png')] bg-cover bg-center h-[600px] md:h-[600px] p-6 md:p-[60px]"
    >
      <div className="flex items-center">
        <img
          className="m-2 md:m-4 w-32 md:w-auto"
          src={"/images/new_logo2.png"}
        />
      </div>

      <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4">
        <button className="border-0 bg-[#00FFFF] text-black font-bold py-2 px-4 rounded w-fit">
          Invite-Only
        </button>
        <p className="text-[#00FFFF]">
          An Executive Roundtable · Lunch
        </p>
      </div>

      <div className="p-2 md:p-4">
        <h1 className="text-[#F5AB40] font-bold text-2xl md:text-4xl">
          The Skills That Matter Next:
        </h1>
        <h3 className="text-[#F5AB40] text-xl md:text-3xl">
          Preparing Your Workforce
        </h3>
        <h3 className="text-[#F5AB40] text-xl md:text-3xl">
          & Leaders for the AI Era
        </h3>
      </div>

      <div className="flex items-start md:items-center">
        <img className="p-2 md:p-4 w-6 md:w-auto" src="/images/vector.svg" />
        <p className="text-white m-2 md:m-4 font-bold text-sm md:text-base">
          February 20, 2026
        </p>
      </div>

      <div className="flex items-start md:items-center">
        <img className="p-2 md:p-4 w-6 md:w-auto" src="/images/vector2.svg" />
        <p className="text-white m-2 md:m-4 font-bold text-sm md:text-base">
          Chamberlain’s Steak & Fish House, Dallas
        </p>
      </div>
    </div>
  );
}
