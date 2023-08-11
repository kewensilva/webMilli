import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
import { Saira } from 'next/font/google'
import { FilterContextProvider } from '@/contexts/filter-context'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Milli Guarapuava',
  description: 'Sapatilhas ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {/* <Footer /> */}
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
