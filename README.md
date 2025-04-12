# 🧠 LLM-Driven Feature Implementation from Jira Ticket

This project is a solution to **Problem Statement 4: LLM-Driven Feature Implementation from Description** from the internship drive. The system allows users to input feature descriptions (like Jira tickets), and it uses **OpenAI GPT models** to generate:

- ✅ Backend code implementing the described feature  
- 🧪 Corresponding unit test cases  
- 📄 A detailed explanation of the implementation

---

## 🚀 Features

- Take user feature description as input
- Use ChatGPT to understand and process the request
- Generate backend logic in Node.js/Express (or any specified stack)
- Generate unit tests using Jest (or specified testing library)

---

## 🛠️ Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React (Vite) |
| Backend     | Node.js, Express       |
| AI Service  | OpenAI GPT API         |

---

## 🔍 How It Works

1. **User inputs a Jira ticket-like description**
2. **Frontend** sends this input to the backend via a POST request
3. **Backend** uses the OpenAI API to:
   - Interpret the feature
   - Generate the required backend code
   - Create test cases for it
   - Explain the solution
4. **Frontend** receives and displays the response clearly

