# 🧠 ThinkDSA — Learn DSA the Right Way

<div align="center">

![ThinkDSA Banner](https://img.shields.io/badge/ThinkDSA-AI%20Powered%20Learning-6366f1?style=for-the-badge&logo=react&logoColor=white)

**An intelligent DSA learning assistant that builds your thinking skills — not your copy-paste habit.**

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini-2.5%20Flash-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

> 🎓 *3rd Semester Mini Project | BCS554 | ABES Engineering College*

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [The Problem We Solve](#-the-problem-we-solve)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Project Objectives](#-project-objectives)
- [Team](#-team)

---

## 🚀 About the Project

**ThinkDSA** is an AI-powered web application designed to transform how students learn Data Structures and Algorithms. Instead of handing you the answer, ThinkDSA guides you to *think* — using adaptive hints, Socratic questioning, and logic-first reasoning to build real problem-solving skills.

The core philosophy is simple: **you can't shortcut your way to understanding.** ThinkDSA exists to make sure you don't have to.

At its heart, ThinkDSA is a conversational AI assistant powered by **Google Gemini 2.5 Flash**, wrapped in a clean and intuitive React + TypeScript frontend. It operates with a carefully crafted system prompt that instructs the AI to never give away full solutions — only nudges, hints, and structured approaches that encourage you to do the real thinking.

---

## 🧩 The Problem We Solve — The "AI Shortcut Trap"

With the rise of powerful AI tools, students often fall into a dangerous habit: paste a problem → get the code → submit → move on. This creates two deeply rooted problems:

| Problem | Why It Matters |
|---|---|
| **Weakened Logical Reasoning** | Bypassing structured thinking means never developing the mental models needed for interviews and real-world engineering. |
| **Poor Algorithmic Thinking** | Getting the right answer without understanding *why* it's right leaves you unable to solve any variation of the problem. |

ThinkDSA directly combats this by refusing to be a code generator. It's a **thinking partner**, not a shortcut machine.

---

## ✨ Features

### 🧠 AI Playground (DSAPlayground)
- A **fully conversational AI chat interface** powered by Google Gemini 2.5 Flash
- Multi-turn conversation with full chat history — the AI remembers context throughout your session
- Renders AI responses in **clean Markdown** (code blocks, bullet points, bold text, etc.)
- Smooth auto-scroll to the latest message
- Animated loading indicator while the AI is thinking

### ⚡ Quick Action Buttons
Context-aware one-click prompts to instantly ask:
- 💡 **Give me a hint** — Get a nudge in the right direction without the full solution
- 🔍 **Suggest Approach** — Understand the best algorithmic strategy for the problem
- ⏱️ **Analyze Complexity** — Learn the time and space complexity of the optimal solution
- 📝 **Pseudocode** — Request a structured algorithmic outline when you're genuinely stuck

### 🏠 Home Page
- Animated gradient blob background for a modern, polished feel
- Three feature highlight cards explaining the core value proposition
- Dual CTAs: *Try the Assistant* and *Learn More*

### 📖 Mission / About Page
- Explains the "AI Shortcut Trap" and its consequences for learning
- Four project objective cards: Problem Analysis, Adaptive Reasoning, Platform Integration, Community Strategy

### 👥 Team Page
- Displays all team members with name, section, and roll number
- Built with React, Tailwind CSS, and Google Gemini API — credited on the page

### 🧭 Navigation
- **Sticky header** with glassmorphism blur effect (`backdrop-blur-lg`)
- Seamless SPA navigation between Home, Mission, Team, and Playground views
- Active link highlighting to show the current page

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 6.2 |
| **Styling** | Tailwind CSS (utility-first) |
| **AI Model** | Google Gemini 2.5 Flash (`@google/genai`) |
| **Markdown Rendering** | `react-markdown` 10 |
| **State Management** | React `useState` hooks |

---

## 📁 Project Structure

```
Think_DSA/
│
├── components/
│   ├── Header.tsx          # Sticky navigation bar with glassmorphism effect
│   ├── Hero.tsx            # Landing page with animated blobs and feature cards
│   ├── DSAPlayground.tsx   # Core AI chat interface with quick action buttons
│   ├── About.tsx           # Mission page — The AI Shortcut Trap explained
│   └── Team.tsx            # Team member cards with roll numbers
│
├── services/
│   └── gemini.ts           # Google Gemini API integration + system prompt (Think-First AI)
│
├── types.ts                # TypeScript types — ViewState enum, ChatMessage, TeamMember
├── App.tsx                 # Root component — view state management and routing
├── index.tsx               # React entry point
├── index.html              # HTML shell
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── metadata.json           # Project metadata
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- A **Google Gemini API Key** — get one free at [Google AI Studio](https://aistudio.google.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ishan-Mittal999/Think_DSA.git

# 2. Navigate into the project
cd Think_DSA

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root of the project and add your Gemini API key:

```env
API_KEY=your_google_gemini_api_key_here
```

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.

### Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser and start learning!

### Build for Production

```bash
npm run build
```

---

## 🤖 How It Works

ThinkDSA's intelligence comes from a custom **system instruction** embedded into every call to the Gemini API. This instruction defines the AI's personality and hard rules:

```
You are ThinkDSA, an intelligent DSA tutor designed to foster a "Think-First" mindset.

CORE RULES:
1. DO NOT provide full code solutions immediately.
2. Provide a conceptual HINT or step-by-step APPROACH first.
3. Encourage the user to think — ask guiding questions.
4. Explain time complexity mathematically when asked.
5. Only provide pseudocode or a code skeleton if the user is genuinely stuck after trying.

TONE: Supportive, Socratic, Insightful.
```

This system instruction is combined with the full **conversation history** on every API call — meaning the AI maintains context across the entire session, just like a real tutor who remembers what you've said.

### Conversation Flow

```
User pastes a problem or asks a question
        ↓
ThinkDSA sends full history + new message → Gemini 2.5 Flash
        ↓
AI responds with a hint / guiding question / approach
        ↓
User thinks, refines their understanding, responds
        ↓
Repeat until the user has truly understood the solution
```

---

## 🎯 Project Objectives

| Objective | Description |
|---|---|
| **Problem Analysis** | Train learners to break down complex problems and build algorithmic approaches before writing any code |
| **Adaptive Reasoning** | Deliver AI-generated hints that deepen logical thinking without spoiling the solution |
| **Platform Integration** | Embed reasoning-based learning into a smooth, accessible web interface |
| **Community Strategy** | Lay the foundation for a learning community where strategies and insights are shared |

---

## 👨‍💻 Team

| Name | Section | Roll Number |
|---|---|---|
| **Ishan Mittal** | CSE - 18 | 2400320100538 |
| **Krishna Singhal** | CSE - 18 | 2400320100622 |
| **Krish Srivastava** | CSE - 18 | 2400320100613 |

> 📍 ABES Engineering College | 3rd Semester Mini Project | BCS554

---

## 📄 License

This project is private and created for academic purposes as part of the BCS554 Mini Project coursework.

---

<div align="center">

Built with ❤️ using **React**, **Tailwind CSS**, and **Google Gemini AI**

*"Don't just solve problems. Understand them."*

</div>
