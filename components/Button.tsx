import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="rounded-xl bg-slate-600 text-slate-200 p-2 hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-600"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
