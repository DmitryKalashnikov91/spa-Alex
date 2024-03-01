import Image from 'next/image'
import styles from './AllPackages.module.scss'

const AllPackages = () => {
	return (
		<div className={styles.AllPackages}>
			<h2>Пакеты услуг</h2>
			<Image src='/SpaAlex.jpg' width={200} height={200} alt='logoSA' />
			<div>
				<ul>
					<h3>Разовые услуги</h3>
					<li>30 минут - 1950 рублей</li>
					<li>45 минут - 2700 рублей</li>
					<li>60 минут - 3200 рублей</li>
					<li>90 минут - 4850 рублей</li>
					<li>120 минут - 6000 рублей</li>
				</ul>
				<hr />
				<ul>
					<h3>6 сеансов</h3>
					<li>30 минут - 9600 рублей</li>
					<li>45 минут - 13800 рублей</li>
					<li>60 минут - 16200 рублей</li>
					<li>90 минут - 25200 рублей</li>
				</ul>
				<hr />
				<ul className='pb-24'>
					<h3>12 сеансов</h3>
					<li>30 минут - 18000 рублей</li>
					<li>45 минут - 25800 рублей</li>
					<li>60 минут - 30000 рублей</li>
				</ul>
			</div>
		</div>
	)
}

export default AllPackages
