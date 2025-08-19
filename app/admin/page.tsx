"use client";
import { useState } from "react";
export default function Admin() {
  const [name, setName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [c1, setC1] = useState("#FF8A00");
  const [c2, setC2] = useState("#FFC24D");
  const [c3, setC3] = useState("#111827");
  const [ttlHours, setTtlHours] = useState(2);
  const [token, setToken] = useState("");

  async function call(method: "POST" | "DELETE") {
    const res = await fetch("/api/theme/override", {
      method,
      headers:
        method === "POST"
          ? {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }
          : { Authorization: `Bearer ${token}` },
      body:
        method === "POST"
          ? JSON.stringify({ name, logoUrl, colors: [c1, c2, c3], ttlHours })
          : undefined,
    });
    alert(await res.text());
  }
  return (
    <div className="container" style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
        Admin Override
      </h2>
      <div style={{ display: "grid", gap: 10, maxWidth: 520 }}>
        <input
          placeholder="Admin token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          placeholder="Nombre de empresa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="URL del logo"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
          }}
        >
          <input value={c1} onChange={(e) => setC1(e.target.value)} />
          <input value={c2} onChange={(e) => setC2(e.target.value)} />
          <input value={c3} onChange={(e) => setC3(e.target.value)} />
        </div>
        <input
          type="number"
          min={1}
          max={24}
          value={ttlHours}
          onChange={(e) => setTtlHours(parseInt(e.target.value || "2"))}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn">Crear/Actualizar</button>
          <button
            className="btn"
            style={{ background: "var(--color-3)", color: "#fff" }}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}
