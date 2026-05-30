// 1 CSS Styling
// Add CSS rules to all the routes in your application, it is a good practice to add it to your top level component
import "@/app/ui/global.css";
// 3 Fonts and images
// Add the font to the body element
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 3 Fonts and images Add the font here and you can also use antialiased which smooths out the font */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
