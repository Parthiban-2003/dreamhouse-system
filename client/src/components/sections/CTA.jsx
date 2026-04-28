import { memo } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const CTA = memo(() => {
  const { user } = useAuth();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Build Your Dream Project with Confidence 🏗️
      </h2>

      <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
        Whether you're an engineer managing projects or a customer looking for experts, DreamHouse connects everything in one place.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        
        {/* Engineer CTA */}
        <Link
          to={user ? "/dashboard" : "/signup"}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition shadow"
        >
          For Engineers
        </Link>

        {/* Customer CTA */}
        <Link
          to="/engineers"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
        >
          Find Engineers
        </Link>

      </div>
    </section>
  );
});

export default CTA;