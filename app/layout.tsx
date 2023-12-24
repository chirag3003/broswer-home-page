
import "./globals.css";

export const metadata = {
    title: "Nextjs 13, TailwindCss Template",
    description: "A template for frontend developers created By Chirag Bhalotia",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`text-text bg-background`}>{children}</body>
        </html>
    );
}
