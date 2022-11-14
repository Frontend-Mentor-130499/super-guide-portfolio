import cn from 'classnames';
import { Space_Grotesk } from '@next/font/google';
import './globals.css';
const inter = Space_Grotesk();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={cn(inter.className, 'bg-black')}>{children}</body>
    </html>
  );
}
