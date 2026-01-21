export default function Speaker() {
    return (
        <div className="mt-[3rem] bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] p-6 md:p-[50px]">
            <div>
              <h2 className="font-bold text-3xl md:text-[40px] text-[#F5AB40]">Featured Speakers</h2>
            </div>
            <div className="mt-[3rem]">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <img
                        src="/images/R1.png"
                        alt="Rob Lauber"
                        className="w-full max-w-[240px] h-auto object-cover rounded-lg"
                    />
                   <div> 
                    <h2 className="font-bold text-white text-xl md:text-2xl mt-2 md:mt-0">Rob Lauber</h2>
                    <p className="text-white leading-relaxed max-w-2xl mt-2 md:mt-4">
                        Rob Lauber is a global workforce and capability-building leader with over
                        25 years of experience helping organizations prepare leaders and frontline
                        teams for change. Most recently, he served as SVP and Chief Learning Officer
                        at McDonald’s, leading learning and development across 37,000+ restaurants
                        worldwide. His perspective is especially relevant as organizations rethink
                        leadership and capability models in the age of AI.
                    </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 mt-[3rem]">
                    <img
                        src="/images/R2.png"
                        alt="Krishna Kumar"
                        className="w-full max-w-[240px] h-auto object-cover rounded-lg"
                    />
                   <div> 
                    <h2 className="font-bold text-white text-xl md:text-2xl mt-2 md:mt-0">Krishna Kumar</h2>
                    <p className="text-white leading-relaxed max-w-2xl mt-2 md:mt-4">
                        Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating 
                        workforce transformation driven by AI and digital change. At the center of the learning and skills 
                        ecosystem, he brings a unique perspective on how roles, leadership expectations, 
                        and capabilities are evolving across industries. Through direct engagement with
                        enterprise leaders and education partners, he sees what scales, and what doesn’t, 
                        building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.
                    </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 mt-[3rem]">
                    <img
                        src="/images/R3.png"
                        alt="Sudipto Mitra"
                        className="w-full max-w-[240px] h-auto object-cover rounded-lg"
                    />
                   <div> 
                    <h2 className="font-bold text-white text-xl md:text-2xl mt-2 md:mt-0">Sudipto Mitra</h2>
                    <p className="text-white leading-relaxed max-w-2xl mt-2 md:mt-4">
                        Sudipto Mitra is a senior transformation and growth leader with over 
                        20 years of experience helping enterprises navigate large-scale change 
                        across technology, operations, and talent. As Chief Revenue 
                        Officer at Simplilearn, he works with executive teams to address 
                        workforce capability gaps as AI reshapes roles and operating models. 
                        He previously held leadership roles at Accenture, IBM Consulting, and 
                        WorkFusion.
                    </p>
                    </div>
                </div>

                <div className="m-4 md:m-16 bg-[url('/images/try.png')] bg-cover bg-center rounded-xl p-6 md:p-10">
                    <div className="rounded-xl p-6 md:p-10">
                        <h4 className="text-lg md:text-xl font-semibold mb-3 text-[#00FFFF]">
                        Additional Expert Perspectives
                        </h4>

                        <p className="text-sm md:text-base text-white leading-relaxed max-w-3xl">
                        Invited experts from leading consulting and enterprise learning organizations
                        will contribute short perspectives, offering insight into how large
                        organizations are evolving skills and leadership models in the AI era.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
