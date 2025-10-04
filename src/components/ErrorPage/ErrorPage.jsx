// components/ErrorPage/ErrorPage.jsx
import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        background: "#f8f9fa",
        color: "#333",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>😵</h1>
      <h2 style={{ fontSize: "3rem", margin: "1rem 0" }}>
        Oops! Something went wrong
      </h2>
      {error?.status && (
        <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
          Error {error.status}: {error.statusText || "Unknown error"}
        </p>
      )}
      {error?.message && (
        <p style={{ fontSize: "1rem", color: "#555" }}>{error.message}</p>
      )}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
