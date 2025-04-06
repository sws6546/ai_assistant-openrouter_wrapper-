import { message } from "@/Types";

export default function MessagesWindow({ messages }: { messages: message[] }) {
  return (
    <div
      className="h-full bg-slate-300/10 rounded-2xl border-2 border-slate-300/20 overflow-auto flex flex-col gap-4"
    >
      {messages.map((message, idx) => (
        <div key={idx}><p>{message.role}: {message.content}</p></div>
      ))}
    </div>
  )
}
