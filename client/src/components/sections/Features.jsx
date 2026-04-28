import { memo } from "react";
import { FaTools, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaTools size={28} />,
    title: "Material Tracking",
    desc: "Monitor and manage construction materials in real-time with precision and efficiency.",
  },
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Payment Management",
    desc: "Track expenses, payments, and financial records with complete transparency.",
    highlight: true,
  },
  {
    icon: <FaUsers size={28} />,
    title: "Employee Management",
    desc: "Manage workforce, attendance, and roles with ease and automation.",
  },
];

const Features = memo(() => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Powerful Features for Modern Construction
        </h2>

        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          DreamHouse provides all the tools engineers need to manage projects efficiently and deliver results faster.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition duration-300 group
              ${
                item.highlight
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-white shadow-md hover:shadow-2xl"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-5 flex justify-center items-center w-14 h-14 mx-auto rounded-xl
                ${
                  item.highlight
                    ? "bg-white text-blue-600"
                    : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                } transition`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm ${
                  item.highlight ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>

              {/* Glow Effect */}
              {item.highlight && (
                <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-400 opacity-30 blur-xl"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;