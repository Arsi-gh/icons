import Sideabar from "@/components/sideabar";
import "./globals.css";

export const metadata = {
  title: "icons",
  description: "Arsi icons",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="meta"/>
      </head>
      <body className="flex items-start">
        <Sideabar/>
        {children}
      </body>
    </html>
  );
}