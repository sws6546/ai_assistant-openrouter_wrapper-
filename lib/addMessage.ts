'use server'
import { message } from "@/Types";
import { auth } from "@clerk/nextjs/server";
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_KEY,
});

export async function addMessage(messages: message[]) {
  const { userId } = await auth()
  if (userId != "user_2vLz0vTDLILfNq9lG5BiQQPr868" || !userId) {
    return {
      role: "assistant",
      content: "Sorry, you are not authorized to use this service."
    } as message
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages
    });

    if (!completion.choices || completion.choices.length === 0) {
      throw new Error("No response from AI model");
    }

    const newMsg: message = {
      role: completion.choices[0].message.role,
      content: completion.choices[0].message.content || "No content",
    };
    return newMsg;
  } catch (error) {
    console.error("Error in addMessage:", error);
    const errorMessage: message = {
      role: "assistant",
      content: "Sorry, I encountered an error while processing your request. Please try again."
    }
    return errorMessage;
  }
}