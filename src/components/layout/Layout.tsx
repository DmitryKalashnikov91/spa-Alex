import { FC, PropsWithChildren } from "react";
import Footer from "./footer/Footer";
import Head from "next/head";
import ArrowUp from '../arrowUp/ArrowUp'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
    return ( 
        <>
            <Head>
                <title>Spa Alex | Массажный салон</title>
                <meta name="description" content="spa-alex.ru массажный кабинет на Филях, ТЦ Филион. массаж лица, лимфодренажный, баночный, антицеллюлитный"></meta>
                <link rel="apple-touch-icon" href="favicon.ico" />
            </Head>
            
            <main className={styles.background}>
                <img className={styles.background_img} src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
                {children}
            </main>
            <Footer />
            <ArrowUp />
        </>
    )
}

export default Layout