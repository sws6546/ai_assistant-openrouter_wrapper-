

export default function TextField({ type, placeholder, onChange, value, onKeyDown, disabled }:
  { type: string, placeholder: string, onChange?: (e: any) => void, value?: any, onKeyDown: (e: any) => void, disabled?: boolean }) {
  return (
    <input onChange={onChange} type={type} placeholder={placeholder} value={value} disabled={disabled} className="
      border-2 border-slate-400/30 p-2 rounded-full w-full pl-4 pr-4
      transition bg-slate-300/20 hover:bg-slate-200/30 focus:bg-slate-200/30
      outline-none
    " />
  )
}
