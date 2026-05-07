const engineers = [
  { name: "Arun", projects: 12 },
  { name: "Kumar", projects: 8 },
];

const Engineers = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Engineers</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {engineers.map((e, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h2>{e.name}</h2>
            <p className="text-gray-500">
              Projects: {e.projects}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engineers;