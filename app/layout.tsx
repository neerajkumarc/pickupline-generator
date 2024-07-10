import { Grand_Hotel } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
const grand = Grand_Hotel({ weight: "400", subsets: ["latin"] })
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Pickupline Generator",
  description: "AI powered pickupline generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={grand.className}>
      <body style={{ backgroundImage: 'url("/bg.png")' }} className="sticky top-0 bg-background text-foreground bg-fixed bg-no-repeat bg-center bg-cover h-screen overflow-x-hidden" >
        <main className="relative w-full min-h-[100dvh] flex items-center justify-center"
        >
          {children}<Toaster /></main>
      </body>
    </html>
  );
}
