'use client'
import HorizontalDivider from "./HorizontalDivider"
import TextField from "./TextField"
import MessagesWindow from "./MessagesWindow"
import { useState } from "react"
import { message } from "@/Types"
import Button from "./Button"
import { addMessage } from "@/lib/addMessage"

export default function ChatWindow() {
  const [messages, setMessages] = useState<message[]>([
    { role: "assistant", content: "Hello! I'm your coding AI assistant. How can I help you with your programming tasks today? Feel free to ask questions, request code examples, or get guidance on software development challenges." }
  ])
  const [userMessage, setUserMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    if (!userMessage.trim() || isLoading) return;

    const userMsg: message = {
      role: "user",
      content: userMessage
    }

    setMessages(msgs => [...msgs, userMsg])
    setUserMessage("")
    setIsLoading(true)

    try {
      // Include the new user message in the array sent to the server
      const updatedMessages = [...messages, userMsg];
      const newMsg: message = await addMessage(updatedMessages)
      setMessages(msgs => [...msgs, newMsg])
    } catch (error) {
      console.error("Error fetching response:", error)
      // Optional: Add error handling UI feedback here
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div className="rounded-4xl h-full
      bg-slate-400/10 backdrop-blur-md
      border-2 border-slate-400/30 p-4 
      flex flex-col gap-4 justify-end
    ">
      <MessagesWindow messages={messages} />
      <HorizontalDivider />
      <div className="flex flex-row gap-2">
        <TextField
          type="text"
          placeholder="Write something"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <Button
          onClick={handleClick}
          disabled={isLoading || !userMessage.trim()}
        >
          {isLoading ? (
            <svg className="animate-spin size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>

          )}
        </Button>
      </div>
    </div>
  )
}
