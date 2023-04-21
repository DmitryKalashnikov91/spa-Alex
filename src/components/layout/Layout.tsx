import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return ( 
        <>
            <Head>
                <title>Spa Alex | массажный салон</title>
                <meta name="description" content="spa-alex.ru массажный кабинет на Филях, ТЦ Филион. массаж лица, лимфодренажный, баночный, антицеллюлитный"></meta>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout