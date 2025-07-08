import OAuthLogin from "@/components/OAuthLogin";

export default function RootLayout({ children }) {
  return (
    <div className="h-full flex items-center justify-center bg-[#242424]">
      {/* <div className="bg-[#333] p-10 rounded-2xl w-full mx-4 md:w-1/2 xl:w-1/3">
        {children}
        <div className="w-full flex flex-col items-center gap-4 mt-4">
          <p className="uppercase text-sm font-medium text-[#aaa]">
            or Login with
          </p>
          <OAuthLogin />
        </div>
      </div> */}
      {children}
    </div>
  );
}
