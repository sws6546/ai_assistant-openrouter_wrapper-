export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fafafa] dark:bg-[#050505]">
      {/* Simplified noise texture overlay */}
      <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Slower animated gradient blobs */}
      <div className="absolute top-[-10%] right-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/40 via-indigo-600/40 to-violet-600/40 blur-[80px] animate-pulse"
        style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-[-5%] left-[15%] h-[400px] w-[400px] rounded-full bg-gradient-to-r from-emerald-400/40 via-teal-500/40 to-cyan-500/40 blur-[70px] animate-pulse"
        style={{ animationDelay: '2s', animationDuration: '24s' }} />
      <div className="absolute top-[40%] left-[40%] h-[300px] w-[300px] rounded-full bg-gradient-to-r from-rose-400/40 via-fuchsia-500/40 to-purple-600/40 blur-[60px] animate-pulse"
        style={{ animationDelay: '4s', animationDuration: '28s' }} />

      {/* More visible grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  )
}
