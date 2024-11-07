export const Loader = ({ text }: { text: string }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-indigo-600 text-6xl font-semibold">{text}</p>
    </div>
  )
}