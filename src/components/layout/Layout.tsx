import { FC, PropsWithChildren } from "react";
import Footer from "./footer/Footer";
import Head from "next/head";
import ArrowUp from '../arrowUp/ArrowUp'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return ( 
        <>
            <Head>
                <title>Spa Alex | Массажный салон</title>
                <meta name="description" content="spa-alex.ru массажный кабинет на Филях, ТЦ Филион. массаж лица, лимфодренажный, баночный, антицеллюлитный"></meta>
                <link rel="apple-touch-icon" href="favicon.ico" />
            </Head>
            
            <main>
                {children}
            </main>
            <Footer />
            <ArrowUp />
        </>
    )
}

export default Layout