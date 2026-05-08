import { useState, useCallback } from "react";
import EngineerLayout from "../../components/layout/EngineerLayout";
import MaterialFormModal from "../../components/materials/MaterialFormModal";

const initialData = [
  { id: 1, name: "Cement", qty: 50, cost: 20000 },
  { id: 2, name: "Steel", qty: 30, cost: 50000 },
];

const Materials = () => {
  const [materials, setMaterials] = useState(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // ➕ Add / Update
  const handleSave = useCallback((data) => {
    if (editData) {
      setMaterials((prev) =>
        prev.map((m) => (m.id === editData.id ? { ...m, ...data } : m))
      );
    } else {
      setMaterials((prev) => [
        ...prev,
        { id: Date.now(), ...data },
      ]);
    }

    setIsOpen(false);
    setEditData(null);
  }, [editData]);

  // ✏ Edit
  const handleEdit = (item) => {
    setEditData(item);
    setIsOpen(true);
  };

  // ❌ Delete
  const handleDelete = (id) => {
    setMaterials((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <EngineerLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Materials</h1>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          + Add Material
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th>Qty</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {materials.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="p-3">{m.name}</td>
                <td>{m.qty}</td>
                <td>₹{m.cost}</td>

                <td className="flex gap-3 p-3">
                  <button
                    onClick={() => handleEdit(m)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(m.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isOpen && (
        <MaterialFormModal
          onClose={() => {
            setIsOpen(false);
            setEditData(null);
          }}
          onSave={handleSave}
          editData={editData}
        />
      )}
    </EngineerLayout>
  );
};

export default Materials;