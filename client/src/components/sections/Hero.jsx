import { memo } from "react";
import { Link } from "react-router-dom";

const Hero = memo(() => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-purple-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Dream Home <br />
            <span className="text-blue-600">Smarter & Faster</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            DreamHouse helps engineers manage construction projects,
            materials, payments, and workforce — while customers can
            easily find trusted builders nearby.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              For Engineers
            </Link>

            <Link
              to="/"
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Find Engineers
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:block">
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="hero"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
});

export default Hero;