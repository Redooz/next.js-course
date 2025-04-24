"use client";

import { useEffect } from "react";

export default function ErrorPage({
  err,
  reset,
}: Readonly<{
  err: Error;
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(err);
  }, [err]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <svg
        className="w-1/2 md:w-1/3 lg:w-1/4 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 1119.60911 699"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle cx="292.60911" cy="213" r="213" fill="#f2f2f2"></circle>
        <path
          d="M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819"
          transform="translate(-31.39089 -100.5)"
          fill="#2f2e41"
        ></path>
        <path
          d="M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356"
          transform="translate(-31.39089 -100.5)"
          fill="currentColor"
        ></path>
        <path
          d="M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288"
          transform="translate(-31.39089 -100.5)"
          fill="currentColor"
        ></path>
        <path
          d="M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788"
          transform="translate(-31.39089 -100.5)"
          fill="#2f2e41"
        ></path>
        <ellipse cx="198.60911" cy="424.5" rx="187" ry="25.43993" fill="#3f3d56"></ellipse>
        <ellipse cx="836.60911" cy="660.5" rx="283" ry="38.5" fill="#3f3d56"></ellipse>
        <circle cx="835.05948" cy="545.66686" r="11.51335" fill="#f2f2f2"></circle>
        <rect x="108.60911" y="159" width="208" height="242" fill="#2f2e41"></rect>
        <rect x="87.60911" y="135" width="250" height="86" fill="#3f3d56"></rect>
        <circle cx="316.60911" cy="538" r="79" fill="#2f2e41"></circle>
        <circle cx="318.60911" cy="518" r="27" fill="#fff"></circle>
        <circle cx="318.60911" cy="518" r="9" fill="#3f3d56"></circle>
      </svg>

      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
          500
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          Server Error
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          Whoops, something went wrong on our servers.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
