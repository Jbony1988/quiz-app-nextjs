

import Link from "next/link";
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-blue-500 p-6">
      <div className="bg-white text-purple-500 p-6 rounded-lg text-center shadow-lg max-w-md">
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href={"/"}>
          <button className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition duration-300">
            Go to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
