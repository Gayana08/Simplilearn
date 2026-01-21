export default function Card() {
    return (
        <div className="mt-[3rem] bg-[#D2E1FF80] p-[50px]">
            <div className="m-2 p-8">
                <h1 className="font-bold text-[#F5AB40] text-[40px]">What We'll Explore</h1>
                <p className="text-[25px] mt-[1rem]">The critical shifts every enterprise must plan for:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] mt-1" src="/images/11.png"></img>
                    <h3 className="text-[24px] font-bold mb-2">Skills Decay</h3>
                </div>
                <p className="text-[22px] mt-[1rem]">
                every 2-3 years <br></br> faster for technical skills
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] mt-1" src="/images/vector3.png"></img>
                    <h3 className="text-[24px] font-bold mb-2">Manageral Role Shift</h3>
                </div>
                <p className="text-[22px] mt-[1rem]">
                orchestrating <br></br> people + AI agents  
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] mt-1" src="/images/vector8.png"></img>
                    <h3 className="text-[24px] font-bold mb-2">Leaders + AI Co-Pilots</h3>
                </div>
                <p className="text-[22px] mt-[1rem]">
                requires sensemaking <br></br> and systems thinking
                </p>
            </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] mt-1" src="/images/vector5.png"></img>
                    <h3 className="text-[24px] font-bold mb-2">Frontline Capability</h3>
                </div>
                <p className="text-[22px] mt-[1rem]">
                now depends <br></br> on digital fluency
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] mt-1" src="/images/vector6.png"></img>
                    <h3 className="text-[24px] font-bold mb-2">Core Human Capabilities</h3>
                </div>
                <p className="text-[22px] mt-[1rem]">
                analytical reasoning <br></br> and scenario planning
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] mt-1" src="/images/vector7.png"></img>
                    <h3 className="text-[24px] font-bold mb-2">Winning Organizations</h3>
                </div>
                <p className="text-[22px] mt-[1rem]">
                predict skills<br></br> ahead of demand
                </p>
            </div>
            </div>
        </div>
    );
}