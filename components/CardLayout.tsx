import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  copyright?: string
}

const Layout = ({ children, title = 'Default title', copyright = '(c) yourname' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    {children}
    <footer>
      <span>{copyright}</span>
    </footer>
  </div>
)

export default Layout