import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title: "nickel",
  description: "a crazy element",
};
const rootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> 
          <Theme accentColor="indigo">{props.children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default rootLayout;

// <Box style={{border:"1px dotted #232323"}}>
          
// </Box>