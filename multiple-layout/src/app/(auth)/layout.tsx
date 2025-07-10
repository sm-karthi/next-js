import Header from "../_components/Header";
import "../globals.css";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

      </body>
    </html>
  );
}
