import ButtonElement from '@/components/button/ButtonElement'
import ContactForm from '@/components/contactForm/ContactForm.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme'

const Contacts = () => {
	return (
		<>
			<section className='pt-44 pl-5 pb-16'>
				<div className='text-white text-xl'>
					Spa ALex. Массажный кабинет находится в ТЦ "Филион" <br /> ст. метро
					Фили, ул. Багратионовский пр-д, дом 5, 5-й этаж
					<div className='text-xl'>
						<ButtonElement
							content={'ЗАПИСАТЬСЯ'}
							linkTo={'https://dikidi.net/922352?p=0.pi'}
						/>
					</div>
					<div
						className='mt-10 mx-3'
						style={{ position: 'relative', overflow: 'hidden' }}
					>
						<a
							href='https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps'
							style={{
								color: '#eee',
								fontSize: '12px',
								position: 'absolute',
								top: '0px',
							}}
						>
							Москва
						</a>

						<iframe
							src='https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.509590%2C55.744104&mode=routes&rtext=~55.744272%2C37.509376&rtt=mt&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D62360509408&z=19'
							width='560'
							height='400'
							frameBorder='1'
							style={{ position: 'relative' }}
						></iframe>
					</div>
				</div>{' '}
				<br />
				<p className='text-white text-xl'>и ул. Большая Филевская 19/18 к.2</p>
				<div className='text-xl'>
					<ButtonElement
						content={'ЗАПИСАТЬСЯ'}
						linkTo={'https://dikidi.net/g367474?p=1.sp-pi&c=1608356'}
					/>
				</div>
				<div
					className='mt-10 mx-3'
					style={{ position: 'relative', overflow: 'hidden' }}
				>
					<a
						href='https://yandex.ru/maps/org/spafili/7784552192/?utm_medium=mapframe&utm_source=maps'
						style={{
							color: '#eee',
							fontSize: '12px',
							position: 'absolute',
							top: '0px',
						}}
					>
						Москва
					</a>

					<iframe
						src='https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.498587%2C55.746375&mode=search&oid=7784552192&ol=biz&sll=37.508779%2C55.743278&source=mapframe&sspn=0.045147%2C0.014114&text=%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%20%D1%81%D0%BF%D0%B0%20%D1%84%D0%B8%D0%BB%D0%B8%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F%20%D1%84%D0%B8%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2019%20%2F%2018&utm_source=mapframe&z=16.8'
						width='560'
						height='400'
						frameBorder='1'
						style={{ position: 'relative' }}
					></iframe>
				</div>
				<h3 className='text-white pt-7'>График работы:</h3>
				<p className='text-white'>Пн - Вс: с 10:00 до 22:00</p>
				<h3 className='text-white pt-7'>Электронный адрес:</h3>
				<p className='text-white'>
					<a href='mailto:spa.fili2021@gmail.com'>spa.fili2021@gmail.com</a>
				</p>
			</section>
			<div className='pb-16'>
				<ChakraProvider theme={theme}>
					<ContactForm />
				</ChakraProvider>
			</div>
		</>
	)
}

export default Contacts
