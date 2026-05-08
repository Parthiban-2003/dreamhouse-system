import EngineerLayout from "../../components/layout/EngineerLayout";

const Profile = () => {
  return (
    <EngineerLayout>
      <h1 className="text-xl font-bold mb-4">Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-md">
        <p><strong>Name:</strong> John Builder</p>
        <p><strong>Experience:</strong> 10 years</p>
        <p><strong>Location:</strong> Chennai</p>
        <p><strong>Contact:</strong> +91 9876543210</p>
      </div>
    </EngineerLayout>
  );
};

export default Profile;