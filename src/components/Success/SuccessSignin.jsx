import { useState } from "react";

const SuccessSignin = () => {
  const [user, setUser] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
  });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-24 px-6 bg-[#0d081f]">
      {/* Account Settings heading */}
      <div className="text-center text-white text-3xl font-bold mb-8">Account Settings</div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-6 max-w-4xl w-full bg-[#131025] p-6 rounded-lg shadow-lg border border-gray-700">
        {/* Image Section */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <img
            src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" // Placeholder image, replace with actual user image
            alt="User"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Username and Email */}
        <div className="flex flex-col items-center md:items-start text-white">
          <div className="text-xl font-semibold">{user.username}</div>
          <div className="text-lg text-gray-400">{user.email}</div>
        </div>
      </div>

      {/* Additional Text */}
      <p className="text-gray-400 text-lg mt-6">
        Welcome to the PopX community. Enjoy your journey ahead!
      </p>
    </section>
  );
};

export default SuccessSignin;
