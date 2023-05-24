import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contactForm/ContactForm.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../config/theme';
import Header from '@/components/layout/header/Header';

const Contacts = () => {
    return (
        <Layout>
            <Header />
            <section className='m-8'>
                <h2 className='text-white'>Spa ALex. Массажный кабинет</h2>
                <p className='text-white'>
                    находится в ТЦ "Филион" ст. метро Фили, ул. Багратионовский пр-д, дом 5, 5-й
                    этаж
                </p>
                <h3 className='text-white pt-7'>График работы:</h3>
                <p className='text-white'>Пн - Вс: с 10:00 до 22:00</p>
                <h3 className='text-white pt-7'>Электронный адрес:</h3>
                <p className='text-white'>
                    <a href='mailto:spa.fili2021@gmail.com'>spa.fili2021@gmail.com</a>
                </p>
            </section>
            <div className=''>
                <ChakraProvider theme={theme}>
                    <ContactForm />
                </ChakraProvider>
                <div className='mt-10 mx-3' style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href='https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps'
                        style={{
                            color: '#eee',
                            fontSize: '12px',
                            position: 'absolute',
                            top: '0px',
                        }}>
                        Москва
                    </a>

                    <iframe
                        src='https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.509590%2C55.744104&mode=routes&rtext=~55.744272%2C37.509376&rtt=mt&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D62360509408&z=19'
                        width='560'
                        height='400'
                        frameBorder='1'
                        style={{ position: 'relative' }}></iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Contacts;
