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
				<BiSolidSpa size={50} />
				<Link href={'#about'}>Виды услуг</Link>
			</div>
			<div className={styles.Advantages_card}>
				<FaUserNinja size={50} />
				<Link href={'#about'}>Массажисты</Link>
			</div>
			<div className={styles.Advantages_card}>
				<ImImage size={50} />
				<Link href={'#about'}>Внутри</Link>
			</div>
			<div className={styles.Advantages_card}>
				<TbMessageCircleStar size={50} />
				<Link href={'#reviews'}>Отзывы</Link>
			</div>
		</section>
	)
}

export default Advantages
