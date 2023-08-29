export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="max-w-5xl w-full mx-auto px-6">{children}</main>;
}
