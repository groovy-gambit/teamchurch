export const metadata = {
  title: 'TEAM Church Studio',
  description: 'Church Website',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
