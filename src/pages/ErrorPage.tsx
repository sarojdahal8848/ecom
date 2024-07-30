import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { ICustomError } from "../types";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as ICustomError;
  console.log(error);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-7">
        <h1 className="font-semibold text-2xl">Oops!</h1>
        <p className="text-sm text-gray-700">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500 italic">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
