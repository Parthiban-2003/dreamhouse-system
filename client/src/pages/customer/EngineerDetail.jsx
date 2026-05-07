import { useParams } from "react-router-dom";

const EngineerDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Engineer #{id}
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p><strong>Name:</strong> Arun</p>
        <p><strong>Experience:</strong> 8 years</p>
        <p><strong>Location:</strong> Chennai</p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl">
          Contact
        </button>
      </div>
    </div>
  );
};

export default EngineerDetail;