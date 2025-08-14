````md
# NestJS OpenAI Service

A backend API built with **NestJS** to interact with OpenAI's GPT models.  
Provides a simple endpoint for chat completions and is ready for integration with a frontend UI (Next.js or any other).

---

## Features

- **POST** `/openai/chatCompletion` — Generate AI chat responses
- Ready for environment-based configuration with `@nestjs/config`

---

## Getting Started

### Prerequisites

- Node.js v20+
- [pnpm](https://pnpm.io/) installed globally
- OpenAI API key

### Setup

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd nestjs-openai
   ```
````

2.  Install dependencies

    ```bash
    pnpm install

    ```

3.  Create a `.env` file (see `.env.example`)

    ```env
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY

    ```

4.  Run the development server

    ```bash
    pnpm start:dev

    ```

5.  Test the endpoint using Postman or any HTTP client:
    - **POST** `http://localhost:3000/openai/chatCompletion`
    - Body example:

      ```json
      {
        "messages": [{ "role": "user", "content": "Hello, AI!" }]
      }
      ```

---

## Project Status

- ✅ Backend: OpenAI integration complete
- 🛠 Frontend (Next.js UI) — in progress

---

## Notes

- Make sure your OpenAI API key has access to the models you intend to use (`gpt-4o`, `gpt-3.5-turbo`, etc.)
- All environment-sensitive files (`.env`) are ignored by git. Use `.env.example` as a template.
- Follow feature-branch workflow for clean git history (`feature/*` → `dev` → `main`)

---
