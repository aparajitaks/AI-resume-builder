import { useState } from "react";

export default function ResumeForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    summary: "",
    skills: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login again");
        return;
      }

      const res = await fetch("http://localhost:5001/api/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Backend error:", data);
        alert(data.message || "Failed to save resume");
        return;
      }

      console.log("Saved resume:", data);
      alert("Resume saved successfully!");
    } catch (err) {
      console.error("Frontend error:", err);
    }
  };

  return (
    <div>
      <h2>Create Resume</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={form.summary}
        onChange={handleChange}
      />

      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={form.skills}
        onChange={handleChange}
      />

      <button type="button" onClick={handleSubmit}>
        Save Resume
      </button>
    </div>
  );
}
