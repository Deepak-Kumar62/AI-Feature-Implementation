import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ticket, setTicket] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerate = async () => {
    if (!ticket.trim()) return alert("Please enter a Jira ticket description");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/generate-code", {
        ticketDescription: ticket,
      });

      setGeneratedCode(res.data.generatedCode || "")

    } catch (error) {
      alert("Error generating code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>🧠 AI Feature Implementation</h1>
      <textarea
        rows="5"
        placeholder="Paste your Jira ticket description here..."
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {generatedCode && (
        <div className="result">
          <h2>🛠️ Response:</h2>
          <pre>{generatedCode}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
