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
				<ul>
					<h3>Пакеты услуг</h3>
					<li>6 сеансов по 30 минут - 9250</li>
					<li>45 минут - 2700 рублей</li>
					<li>60 минут - 3200 рублей</li>
					<li>90 минут - 4850 рублей</li>
					<li>120 минут - 6000 рублей</li>
				</ul>
			</div>
		</div>
	)
}

export default AllPackages
