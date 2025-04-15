'use client'
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head lang="pt-br">
                <title>Data Machina</title>
                <link rel="shortcut icon" href="./logoaba.png" type="image/x-icon" />
                <meta name="description" content="Somos pesquisadores e empreendedores com cultura de inovação aplicada, prototipação e ruptura de paradigmas, somos curiosos, dedicados e disruptivos." />
            </head>
            <body>
              { children }
            </body>
        </html>
    );
}
