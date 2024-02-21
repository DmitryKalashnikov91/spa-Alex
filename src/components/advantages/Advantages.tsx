import Link from 'next/link'
import { BiSolidSpa } from 'react-icons/bi'
import { FaUserNinja } from 'react-icons/fa'
import { ImImage } from 'react-icons/im'
import { TbMessageCircleStar } from 'react-icons/tb'
import styles from './Advatages.module.scss'

const Advantages = () => {
	return (
		<section className={styles.Advantages}>
			<div className={styles.Advantages_card}>
				<Link href={'#about'}>
					<BiSolidSpa size={50} />
					Виды услуг
				</Link>
			</div>
			<div className={styles.Advantages_card}>
				<Link href={'/masseures'}>
					<FaUserNinja size={50} />
					Массажисты
				</Link>
			</div>
			<div className={styles.Advantages_card}>
				<Link href={'/gallery'}>
					<ImImage size={50} />
					Галерея
				</Link>
			</div>
			<div className={styles.Advantages_card}>
				<Link href={'#reviews'}>
					<TbMessageCircleStar size={50} />
					Отзывы
				</Link>
			</div>
		</section>
	)
}

export default Advantages
