import Header from "@/components/headers";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        {children}
        </>
    );
}
