export default function Agenda() {
  const cards = [
    {
      title: "Welcome & Opening",
      description:
        "Sudipto Mitra, CRO Simplilearn",
      para: "Why capability-building is now a board-level issue and what's changing in the workforce landscape."
    },
    {
      title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
      description:
        "Rob Lauber, Former CLO McDonald's",
      para: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
      
    },
    {
      title: "Lunch & Executive Conversation",
      description:
        "Industry Experts Invited",
      para:"What large enterprise talent ecosystems are learning anout capability-building at scale."
    },
  ];

  return (
    <div className="mx-auto px-4 py-12 bg-[#00FFFF]">
        <h1 className="text-[blue] font-bold text-2xl p-4">Event Agenda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[3rem] p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
          >
            {/* <div className="text-4xl mb-4">{card.icon}</div> */}
            <h3 className="text-xl font-semibold mb-2 text-[blue]">{card.title}</h3>
            <p className="text-600 font-bold">{card.description}</p>
            <p className="text-600">{card.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
