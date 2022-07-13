const env = {
  API_URL:
    process.env.NODE_ENV === "production"
      ? "http://157.245.216.89:5001"
      : "http://localhost:4000/api/v1",
};

export default env;
