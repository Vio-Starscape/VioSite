import "./globals.css";
import VioProvider from "@/context/VioContext";
import MatomoWrapper from "@/context/MatomoContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MatomoWrapper>
          <VioProvider>
            {children}
          </VioProvider>
        </MatomoWrapper>
      </body>
    </html>
  );
}
