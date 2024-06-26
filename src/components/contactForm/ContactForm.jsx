import {
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Textarea,
	useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import { sendContactForm } from '../../lib/api'
import styles from './ContactForm.module.scss'
export const Buttons = [
	{
		id: 'vk',
		img: '/cib_vk.svg',

		link: 'https://vk.com/spa_alex',
	},
	{
		id: 'tg',
		img: '/telegram.svg',

		link: 'https://t.me/+4RXEfiXa_C0xNDBi',
	},
	{
		id: 'wtsp',
		img: '/watsap.svg',

		link: 'https://wa.me/79689893388',
	},
]

const initValues = {
	name: '',
	email: '',
	phone: '',
	date: '',
	message: '',
}
const initState = { values: initValues }

const ContactForm = () => {
	const [state, setState] = useState(initState)
	const [touched, setTouched] = useState({})
	const toast = useToast()

	const { values, isLoading, error } = state
	const handleChange = ({ target }) =>
		setState(prev => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}))

	const onBlur = ({ target }) =>
		setTouched(prev => ({ ...prev, [target.name]: true }))

	const onSubmit = async () => {
		setState(prev => ({
			...prev,
			isLoading: true,
		}))

		try {
			await sendContactForm(values)
			setTouched({})
			setState(initState)
			toast({
				title: 'Спасибо! Ваше сообщение оправлено',
				status: 'success',
				duration: 2000,
				position: 'top',
			})
		} catch (error) {
			setState(prev => ({
				...prev,
				isLoading: false,
				error: error.message,
			}))
		}
	}

	return (
		<section className={styles.ContactForm}>
			<Container maxW={'450px'} mt={12}>
				<Heading>Записаться на массаж</Heading>
				<div className='flex justify-between m-5'>
					{Buttons.map(btn => (
						<div key={btn.id} className='m-4'>
							<Link href={btn.link} target='blank'>
								<Image src={btn.img} width={32} height={32} alt={btn.img} />
							</Link>
						</div>
					))}
				</div>
				<span className='mb-4'>
					Чтобы записаться на массаж позвоните по номеру телефона. Или напишите
					нам, удобным для вас способом. Укажите дату и любые пожелания и мы
					свяжемся с вами в ближайшее время!
				</span>
				{error && (
					<Text color='red.300' my={4} fontSize='xl'>
						{error}
					</Text>
				)}
				<FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
					<FormLabel>Имя</FormLabel>
					<Input
						type='text'
						errorBorderColor='red.300'
						name='name'
						value={values.name}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Необходимо ваше имя</FormErrorMessage>
				</FormControl>
				<FormControl
					isRequired
					isInvalid={touched.email && !values.email}
					mb={5}
				>
					<FormLabel>Email</FormLabel>
					<Input
						type='email'
						name='email'
						errorBorderColor='red.300'
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Необходим ваш электронный адрес</FormErrorMessage>
				</FormControl>
				<FormControl
					isRequired
					isInvalid={touched.phone && !values.phone}
					mb={5}
				>
					<FormLabel>Телефон</FormLabel>
					<Input
						type='phone'
						name='phone'
						errorBorderColor='red.300'
						value={values.phone}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Необходим ваш номер телефона</FormErrorMessage>
				</FormControl>
				<FormControl mb={5}>
					<FormLabel>День посещения</FormLabel>
					<Input
						type='date'
						name='date'
						value={values.date}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl mb={5}>
					<FormLabel>Пожелания</FormLabel>
					<Textarea
						type='text'
						name='message'
						rows={5}
						cols={28}
						value={values.message}
						onChange={handleChange}
					/>
				</FormControl>{' '}
				<Script
					type='text/javascript'
					src='https://beauty.dikidi.net/assets/js/widget_record/widget2.min.js'
				></Script>
				<Button
					variant={'outline'}
					colorScheme='blue'
					isLoading={isLoading}
					disabled={!values.name || !values.email || !values.phone}
					onClick={onSubmit}
				>
					Отправить
				</Button>
			</Container>
		</section>
	)
}

export default ContactForm
