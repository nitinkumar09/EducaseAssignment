import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // navigate hook le liya

  return (
    <section className="pb-[130px] flex flex-col items-center justify-center min-h-screen sm:py-24 px-2 bg-[#0d081f]">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Welcome to PopX</h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto">
          Discover a world of possibilities with PopX. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 w-full max-w-xs mx-auto">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/SignIn")}
          className="w-full border border-purple-500 py-3 text-purple-400 font-semibold rounded-md hover:bg-purple-600 hover:text-white transition"
        >
          Already registered? Login
        </button>
      </div>
    </section>
  );
};

export default Hero;
