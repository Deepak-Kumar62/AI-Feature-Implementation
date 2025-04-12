import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ticket, setTicket] = useState("");
  const [backendCode, setBackendCode] = useState("");
  const [unitTests, setUnitTests] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerate = async () => {
    if (!ticket.trim()) return alert("Please enter a Jira ticket description");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/generate-code", {
        ticketDescription: ticket,
      });

      console.log(res)
      setGeneratedCode(res.data.generatedCode || "")

      // setBackendCode(res.data.backendCode || "");
      // setUnitTests(res.data.unitTests || "");
      // setExplanation(res.data.explanation || "");
    } catch (error) {
      alert("Error generating code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // console.log(generatedCode)

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
          <h2>🛠️ Backend Code:</h2>
          <pre>{generatedCode}</pre>
        </div>
      )}

      {/* {backendCode && (
        <div className="result">
          <h2>🛠️ Backend Code:</h2>
          <pre>{backendCode}</pre>
        </div>
      )}

      {unitTests && (
        <div className="result">
          <h2>✅ Unit Tests:</h2>
          <pre>{unitTests}</pre>
        </div>
      )}

      {explanation && (
        <div className="result">
          <h2>📝 Explanation:</h2>
          <pre>{explanation}</pre>
        </div>
      )} */}
    </div>
  );
}

export default App;
