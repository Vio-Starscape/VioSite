import About from "@/components/About/Index";

export const metadata = {
  title: "Vio",
  description: "Vio, Development of Starscape Market Technologies",
  openGraph: {
      title: "Vio",
      description: "Vio, Development of Starscape Market Technologies",
      url: "https://vio.dev",
      siteName: "Vio",
      locale: "en_US",
      type: "website",
  },
};

export default function AboutPage() {
    return <About />;
  }
  