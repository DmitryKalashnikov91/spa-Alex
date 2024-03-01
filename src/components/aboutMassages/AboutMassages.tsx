import { animated, useInView } from '@react-spring/web'
import { FC } from 'react'
import styles from './AboutMassages.module.scss'

type TypeMassages = {
	id: string
	time: string[]
	name: string
	text: string
	price: number
	to: number
}

const massageDB: TypeMassages[] = [
	{
		id: 'classic',
		time: ['30', '120'],
		name: 'Классический массаж',
		text: 'При классическом массаже выводятся продукты распада, шлаки и токсины, расщепляются жиры, кожа разглаживается, становясь упругой и эластичной, уменьшаются проявления целлюлита.',
		price: 1950,
		to: 6000,
	},
	{
		id: 'relax60',
		time: ['60', '120'],
		name: 'Релакс массаж',
		text: 'Релакс-массаж способствует снятию усталости, повышению работоспособности и используется в качестве профилактики переутомления, эмоционального напряжения, стресса. Он придает телу легкость и энергию.',
		price: 3200,
		to: 6000,
	},
	{
		id: 'neckArea',
		time: ['30', '45'],
		name: 'Массаж шейно-воротниковой зоны (швз)',
		text: 'Массаж шейно-воротниковой зоны в целом несет оздоровительный эффект для организма, повышает жизненный тонус и оказывает много других положительных воздействий.',
		price: 1950,
		to: 2700,
	},
	{
		id: 'anticellulite',
		time: ['45', '60'],
		name: 'Антицеллюлитный массаж',
		text: 'Антицеллюлитный массаж помогает кислороду проникнуть в глубокие слои кожи и ускоряет лимфатический отток. Благодаря этому виду массажа в подкожно-жировом слое нормализуется обмен веществ, очаги целлюлита выводятся из организма с лишней жидкостью.',
		price: 2700,
		to: 3200,
	},
	{
		id: 'correct',
		time: ['45', '60'],
		name: 'Корректирующий массаж',
		text: 'Корректирующий массаж способствует расщеплению жира, уменьшению объемов тела и делает фигуру точеной и пропорциональной.',
		price: 2700,
		to: 3200,
	},
	{
		id: 'face',
		time: ['45', '60'],
		name: 'Массаж лица',
		text: 'После курса массажа лица: разглаживаются мелкие морщины запускается синтез коллагена, который отвечает за молодость лица, улучшается цвет лица, кожа начинает сиять изнутри, приобретает бархатистый вид',
		price: 2700,
		to: 3200,
	},
	{
		id: 'lymphatic',
		time: ['45', '90'],
		name: 'Лимфодренажный массаж',
		text: 'Выводит воду из тела, убирает отёчность. Его используют для коррекции фигуры, омоложения, реабилитации после травм и операций, восстановления после тяжёлых тренировок.',
		price: 2700,
		to: 4850,
	},
	{
		id: 'relax',
		time: ['60', '120'],
		name: 'Расслабляющий',
		text: 'Данный вид массажа оказывает воздействие не только на организм человека. Помимо этого он способствует улучшению работы опорно-двигательного аппарата и внутренних систем, мускулатуры, суставов и нервных волокон. Расслабляет и снимает стресс.',
		price: 3200,
		to: 6000,
	},
]

const AboutMassages: FC = () => {
	const [ref, springs] = useInView(() => ({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	}))
	return (
		<section className={styles.About} id='about'>
			<h2>Мы предлагаем:</h2>
			<div className={styles.About_content} ref={ref}>
				{massageDB.map(({ id, name, text, price, time, to }) => (
					<animated.div
						style={springs}
						className={styles.About_content__block}
						key={id}
					>
						<h3 className='text-2xl'>{name}</h3>
						<div className='flex justify-around text-purple-400 mb-4'>
							<span>
								{' '}
								от {price} до {to} рублей
							</span>
							<span>
								от {time[0]} до {time[1]} минут
							</span>
						</div>
						<p className='text-xl'>{text}</p>
					</animated.div>
				))}
			</div>
		</section>
	)
}

export default AboutMassages
