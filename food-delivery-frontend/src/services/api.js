const BASE_URL = "http://localhost:5000/api";

export const testBackendAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/test`);
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
  }
};
