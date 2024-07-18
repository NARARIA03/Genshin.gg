import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex-1 flex justify-center items-center">
      <div className="loader">
        <style>
          {`
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
        </style>
      </div>
    </div>
  );
}
