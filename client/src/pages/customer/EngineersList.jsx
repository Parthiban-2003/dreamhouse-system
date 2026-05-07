import { Link } from "react-router-dom";

const engineers = [
  { id: 1, name: "Arun", location: "Chennai" },
  { id: 2, name: "Vijay", location: "Coimbatore" },
];

const EngineersList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Find Engineers</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {engineers.map((eng) => (
          <div key={eng.id} className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold">{eng.name}</h2>
            <p className="text-gray-500">{eng.location}</p>

            <Link
              to={`/engineers/${eng.id}`}
              className="text-blue-600 mt-2 inline-block"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineersList;