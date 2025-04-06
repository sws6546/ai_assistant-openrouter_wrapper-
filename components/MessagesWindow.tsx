import { message } from "@/Types";
import { useEffect, useRef } from "react";
import '@/styles/scrollbar.css'

// Simple Markdown renderer function
const renderMarkdown = (content: string) => {
  // Replace code blocks (already handled separately by split)

  // Replace headers
  let formatted = content
    // Headers (h1, h2, h3)
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-3 mb-1">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-5 mb-3">$1</h1>')

    // Bold, italic
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

    // Lists
    .replace(/^\s*\- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^\s*\d\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')

    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="text-blue-500 underline" href="$2" target="_blank" rel="noopener">$1</a>')

    // Line breaks
    .replace(/\n/g, '<br />');

  return formatted;
};

export default function MessagesWindow({ messages }: { messages: message[] }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="h-full bg-slate-300/10 rounded-2xl border-2 border-slate-300/20 overflow-auto flex flex-col gap-4 p-4
      scrollbar-thin scrollbar-thumb-slate-400/30 scrollbar-track-slate-300/10 hover:scrollbar-thumb-slate-400/50"
    >
      {messages.map((message, idx) => (
        message.role === 'assistant' ?
          <div
            key={idx}
            className="bg-slate-400/10 backdrop-blur-sm border border-slate-400/30 rounded-2xl rounded-tl-sm p-4 max-w-[85%] self-start"
          >
            {/* Advanced markdown rendering for code blocks and other markdown elements */}
            {message.content.split("```").map((block, blockIdx) =>
              blockIdx % 2 === 0 ?
                <div
                  key={blockIdx}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(block) }}
                /> :
                <pre key={blockIdx} className="bg-slate-600/50 p-3 rounded-xl my-2 overflow-x-auto text-sm">
                  <code>{block}</code>
                </pre>
            )}
          </div>
          :
          <div
            key={idx}
            className="bg-slate-600 text-slate-200 rounded-2xl rounded-tr-sm p-4 max-w-[85%] self-end"
          >
            {message.content}
          </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
