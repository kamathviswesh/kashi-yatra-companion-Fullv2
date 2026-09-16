import "./globals.css";
 
export const metadata = {
  title: "Kashi Yatra Companion",
  description: "Family pilgrimage companion for Kashi, Prayagraj & Ayodhya",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
