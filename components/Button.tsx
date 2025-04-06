import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="bg-slate-400/20 backdrop-blur-md border-2 border-slate-100/30 p-2 pl-3 pr-3 rounded-full cursor-pointer
      hover:bg-slate-200/30
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-600"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
