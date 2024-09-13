import { IconAlertTriangle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex space-x-3">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          404: Page Not Found{" "}
        </h1>
        <span className="text-center text-4xl font-bold text-gray-800">
          <IconAlertTriangle stroke={2} size={40} />
        </span>
      </div>

      <p className="mt-4 text-center text-lg text-gray-600">
        We couldn't find the page you were looking for.
      </p>
      <img
        src={"/notfound.svg"}
        alt="login-image"
        className="mt-8 h-[500px] w-[800px]"
      />

      <button
        onClick={() => navigate("/")}
        className="mt-8 rounded bg-primary1 px-4 py-2 font-bold text-white shadow-sm"
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default NotFoundPage;
