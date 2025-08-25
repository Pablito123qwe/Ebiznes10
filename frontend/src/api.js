const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
export async function fetchData() {
  const res = await fetch(`${API_URL}/api/data`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
