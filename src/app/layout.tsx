import "./globals.css";
import { Children } from "@/lib/types/types";
import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "../providers/ThemeProvider";
import AosProvider from "../providers/AosProvider";

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
