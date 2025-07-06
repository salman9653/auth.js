export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-[#222] px-10 py-6 rounded-xl w-full md:w-1/2 xl:w-1/3">
        {children}
      </div>
    </div>
  );
}
