import EngineerLayout from "../../components/layout/EngineerLayout";

const stats = [
  { title: "Materials", value: 128 },
  { title: "Payments", value: "₹1,20,000" },
  { title: "Employees", value: 24 },
];

const Dashboard = () => {
  return (
    <EngineerLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>
    </EngineerLayout>
  );
};

export default Dashboard;