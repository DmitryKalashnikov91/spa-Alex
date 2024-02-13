import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import ArrowUp from '../arrowUp/ArrowUp'
import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
	return (
		<>
			<Head>
				<title>Spa Alex | Массажный салон</title>
				<meta
					name='description'
					content='spa-alex.ru массажный кабинет на Филях, ТЦ Филион. массаж лица, лимфодренажный, баночный, антицеллюлитный'
				></meta>
				<link rel='apple-touch-icon' href='favicon.ico' />
			</Head>
			<Header />
			<main className={styles.background}>{children}</main>
			<Footer />

			<ArrowUp />
		</>
	)
}

export default Layout
