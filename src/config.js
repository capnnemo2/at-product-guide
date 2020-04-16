export default {
  API_ENDPOINT:
    process.env.REACT_APP_DATABASE_URL || `http://localhost:8000/api`,
  API_KEY: process.env.REACT_APP_API_TOKEN,
};
