import { useEffect, useState } from "react";
import { fetchData } from "./api";

export default function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>Frontend (Cloud Run)</h1>
      {err && <p style={{color:"crimson"}}>Błąd: {err}</p>}
      <p>Status: {data ? "OK" : "Ładowanie..."}</p>
      {data && (
        <>
          <h2>{data.message}</h2>
          <ul>{data.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </>
      )}
    </div>
  );
}
