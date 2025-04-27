import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const SignIn = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success-signin"); // Navigate to the SuccessSignin page upon success
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-[#0d081f]">
      {/* Instead of showing success message here, we redirect to SuccessSignin page */}
     
        <>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Welcome to PopX</h2>
            <p className="text-gray-400 text-lg max-w-md">
              Log in to your PopX account and continue your exciting journey with us. Your adventure awaits!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <button
            className="mt-6 w-full max-w-md border border-purple-500 py-3 text-purple-400 font-semibold rounded-md hover:bg-purple-600 hover:text-white transition"
            onClick={() => window.location.href = "/signup"}
          >
            New here? Create an Account
          </button>
        </>
    </section>
  );
};

export default SignIn;
