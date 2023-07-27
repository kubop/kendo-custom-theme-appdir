export default function PrivacyLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <p>This is custom privacy layout</p>
        {children}
      </section>
    )
  }