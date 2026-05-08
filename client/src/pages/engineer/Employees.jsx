import EngineerLayout from "../../components/layout/EngineerLayout";

const employees = [
  { name: "Ravi", role: "Mason" },
  { name: "Kumar", role: "Supervisor" },
];

const Employees = () => {
  return (
    <EngineerLayout>
      <h1 className="text-xl font-bold mb-4">Employees</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {employees.map((emp, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold">{emp.name}</h2>
            <p className="text-gray-500">{emp.role}</p>
          </div>
        ))}
      </div>
    </EngineerLayout>
  );
};

export default Employees;