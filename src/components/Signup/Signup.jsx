import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success-signup"); // Redirect to SuccessSignup page
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-[#0d081f]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome to PopX</h2>
        <p className="text-gray-400 text-lg max-w-md">
          Create your personalized account today and start exploring exciting new possibilities with PopX. Join us now and be part of the revolution!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col space-y-4">
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        
        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />

        {/* Phone Number */}
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        
        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        
        {/* Radio Buttons for Agency */}
        <div className="flex items-center space-x-6">
          <label className="text-white">Are you an agency?</label>
          <div>
            <input
              type="radio"
              id="yes"
              name="agency"
              value="yes"
              required
              className="text-purple-500"
            />
            <label htmlFor="yes" className="text-white">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="no"
              name="agency"
              value="no"
              required
              className="text-purple-500"
            />
            <label htmlFor="no" className="text-white">No</label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>

      <button
        className="mt-6 w-full max-w-md border border-purple-500 py-3 text-purple-400 font-semibold rounded-md hover:bg-purple-600 hover:text-white transition"
        onClick={() => window.location.href = "/signin"}
      >
        Already registered? Login
      </button>
    </section>
  );
};

export default Signup;
