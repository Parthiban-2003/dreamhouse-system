import { useState, useEffect } from "react";

const MaterialFormModal = ({ onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    name: "",
    qty: "",
    cost: "",
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      
      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {editData ? "Edit Material" : "Add Material"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="name"
            placeholder="Material Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
            required
          />

          <input
            name="qty"
            type="number"
            placeholder="Quantity"
            value={form.qty}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
            required
          />

          <input
            name="cost"
            type="number"
            placeholder="Cost"
            value={form.cost}
            onChange={handleChange}
            className="w-full border p-2 rounded-xl"
            required
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaterialFormModal;