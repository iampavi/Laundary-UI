const BASE_URL = import.meta.env.VITE_API_URL;

export const apiClient = async (url, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) throw new Error("API Error");

    return await res.json();
  } catch (err) {
    console.error("API ERROR:", err);
    throw err;
  }
};