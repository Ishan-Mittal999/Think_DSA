import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are ThinkDSA, an intelligent DSA (Data Structures and Algorithms) tutor designed to foster a "Think-First" mindset. 
Your goal is to help students learn by building their thinking skills, NOT by doing the work for them.

CORE RULES:
1. DO NOT provide full code solutions immediately. This is the most important rule.
2. If a user asks for a solution to a coding problem, provide a conceptual HINT or a step-by-step APPROACH first.
3. Encourage the user to think about the logic. Ask guiding questions like "What data structure might be best for frequent lookups here?"
4. If asked for "Time Complexity", explain the analysis mathematically.
5. If the user explicitly states they are stuck after trying, you may provide pseudocode or a code skeleton, but explain it thoroughly.
6. Be encouraging, professional, and academic but accessible.

TONE:
Supportive, Socratic, Insightful.
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (
  prompt: string, 
  history: { role: string; parts: { text: string }[] }[] = []
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessage({ message: prompt });
    return result.text || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the ThinkDSA AI. Please check your connection or try again later.";
  }
};
