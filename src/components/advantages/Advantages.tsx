import { animated, useInView } from '@react-spring/web'
import Link from 'next/link'
import { BiSolidSpa } from 'react-icons/bi'
import { FaUserNinja } from 'react-icons/fa'
import { ImImage } from 'react-icons/im'
import { TbMessageCircleStar } from 'react-icons/tb'
import styles from './Advatages.module.scss'

const Advantages = () => {
	const [ref, inView] = useInView(() => ({
		from: {
			opacity: 0,
			x: -100,
		},
		to: {
			opacity: 1,
			x: 0,
		},
	}))
	const [ref1, inView1] = useInView(() => ({
		from: {
			opacity: 0,
			x: 100,
		},
		to: {
			opacity: 1,
			x: 0,
		},
	}))

	return (
		<section className={styles.Advantages}>
			<animated.div ref={ref} style={inView} className={styles.Advantages_card}>
				{
					<Link href={'#about'}>
						<BiSolidSpa size={50} />
						Виды услуг
					</Link>
				}
			</animated.div>
			<animated.div
				ref={ref1}
				style={inView1}
				className={styles.Advantages_card}
			>
				<Link href={'/masseures'}>
					<FaUserNinja size={50} />
					Массажисты
				</Link>
			</animated.div>
			<animated.div ref={ref} style={inView} className={styles.Advantages_card}>
				<Link href={'/gallery'}>
					<ImImage size={50} />
					Галерея
				</Link>
			</animated.div>
			<animated.div
				ref={ref1}
				style={inView1}
				className={styles.Advantages_card}
			>
				<Link href={'#reviews'}>
					<TbMessageCircleStar size={50} />
					Отзывы
				</Link>
			</animated.div>
		</section>
	)
}

export default Advantages
