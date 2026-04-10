import "./globals.css";

export const metadata = {
  title: "ETERNIX Chess",
  description:
    "ETERNIX is a premium chess training platform in Bengaluru focused on coaching, puzzle solving, and competitive mindset.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
