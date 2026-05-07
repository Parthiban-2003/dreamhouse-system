const users = [
  { name: "User1", role: "Customer" },
  { name: "User2", role: "Engineer" },
];

const Users = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users</h1>

      <ul className="bg-white rounded-xl shadow p-4">
        {users.map((u, i) => (
          <li key={i} className="border-b py-2">
            {u.name} - {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;