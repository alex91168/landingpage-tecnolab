import "./globals.css";
import Header from "../componentes/main/Header/Header";
import Whatsapp from "../componentes/main/Whatsapp/ContatoWpp";
import Footer from "../componentes/main/Footer/Footer";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Tecno Lab - Inovação em Tecnologia",
    template: "%s | Tecno Lab",
  },
  description: "A Tecno Lab é uma empresa especializada em fornecer soluções tecnológicas inovadoras e personalizadas para negócios de diferentes segmentos. Com uma abordagem focada em desenvolvimento de software, consultoria estratégica e implementação de tecnologias de ponta, nossa missão é impulsionar o crescimento e a transformação digital de nossos clientes. Trabalhamos com ferramentas de última geração, desenvolvendo soluções sob medida que atendem às necessidades específicas de cada empresa, garantindo eficiência, escalabilidade e segurança.",
  keywords: "tecnologia, inovação, desenvolvimento de software, soluções digitais",
  authors: [{ name: "Alex Batista", url: "alexbatista-portfolio.vercel.app" }],
  openGraph: {
    title: "Tecno Lab - Inovação em Tecnologia",
    description: "A Tecno Lab é uma empresa especializada em fornecer soluções tecnológicas inovadoras e personalizadas para negócios de diferentes segmentos. Com uma abordagem focada em desenvolvimento de software, consultoria estratégica e implementação de tecnologias de ponta, nossa missão é impulsionar o crescimento e a transformação digital de nossos clientes. Trabalhamos com ferramentas de última geração, desenvolvendo soluções sob medida que atendem às necessidades específicas de cada empresa, garantindo eficiência, escalabilidade e segurança.",
    url: "https://tecno-lab.vercel.app",
    siteName: "Tecno Lab",
  }
};


export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tecno Lab",
    url: "https://tecno-lab.vercel.app",
    logo: "https://tecno-lab.vercel.app/logo-site.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-1234-5678",
      contactType: "Customer Service",
    },
  };
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/logo-site.png" />
        <link rel="apple-touch-icon" href="/logo-site.png" />
        <meta name="google-site-verification" content="koCy3m95dbPRjs3rcgIjCtiV2I7YQCPf_0v7t-s-nvg" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
