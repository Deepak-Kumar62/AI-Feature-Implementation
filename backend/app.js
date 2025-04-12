import express from "express";
import cors from "cors";
import { OpenAI } from "openai";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate-code", async (req, res) => {
  const { ticketDescription } = req.body;
  console.log(ticketDescription);

  const prompt = `
  You are a full-stack developer. A feature request has come in:

  "${ticketDescription}"

  Please generate:
  1. The backend code (Node.js + Express).
  2. Unit tests using Jest.
  3. A short explanation of what you did.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    const generatedCode = response.choices[0].message.content;
    console.log(generatedCode.split("\n\n"));
    console.log(generatedCode.split("\n\n").length)

    // const input = generatedCode; // paste the full content here

    // const backendCodeMatch = input.match(
    //   /### 1\. Backend Code *?```javascript\n([\s\S]*?)```/
    // );
    // const testCodeMatch = input.match(
    //   /### 2\. Unit Tests *?```javascript\n([\s\S]*?)```/
    // );
    // const explanationMatch = input.match(/### 3\. Explanation([\s\S]*)/);

    // const backendCode = backendCodeMatch ? backendCodeMatch[1].trim() : "";
    // const unitTests = testCodeMatch ? testCodeMatch[1].trim() : "";
    // const explanation = explanationMatch ? explanationMatch[1].trim() : "";

    // console.log("🔧 Backend Code:\n", backendCode);
    // console.log("\n🧪 Testing Code:\n", unitTests);
    // console.log("\n📘 Explanation:\n", explanation);
    // const [backendCode, unitTests, explanation] = generatedCode.split("\n\n");

    res.json({
      generatedCode,
    });

    // res.json({
    //   backendCode,
    //   unitTests,
    //   explanation,
    // });
  } catch (error) {
    res.status(500).send("Error generating code");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
// Add a date range filter to the product search API.
