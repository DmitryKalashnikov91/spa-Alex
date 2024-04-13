import Image from 'next/image'
import ButtonElement from '../../button/ButtonElement'
import styles from './Specialists.module.scss'

const Specialists = () => {
	return (
		<>
			<h2 className='pt-36 pb-12 text-center text-orange-200 text-xl'>
				Специалисты массажа
			</h2>
			<div className={styles.Specialists}>
				<div className={styles.Specialists_card}>
					<Image
						src={'/OlgaMasseur.avif'}
						width={250}
						height={420}
						alt='Ольга Массажист'
					/>
					<span>
						<article>Ольга</article> опыт 7 лет все виды массажа +
						аппаратный массаж
						<ButtonElement
							content={'ЗАПИСАТЬСЯ'}
							linkTo={'https://dikidi.net/922352?p=1.pi-mi&o=11&m=2880732'}
						/>
					</span>
				</div>
				<div className={styles.Specialists_card}>
					<Image
						src={'/KonstantinMasseur.avif'}
						width={250}
						height={420}
						alt='Константин Массажист'
					/>
					<span>
						<article>Константин</article> 20 ЛЕТ стажа! все виды массажа
					</span>
					<ButtonElement
						content={'ЗАПИСАТЬСЯ'}
						linkTo={'https://dikidi.net/922352?p=1.pi-mi&o=11&m=2096418'}
					/>
				</div>
				<div className={styles.Specialists_card}>
					<Image
						src={'/OsteoMariya.jpg'}
						width={250}
						height={420}
						alt='Мария Остеопат'
					/>
					<span>
						<article>Мария</article>Остеопат, массажист-реабилитолог. Стаж
						работы 10 лет.
					</span>
					<ButtonElement
						content={'ЗАПИСАТЬСЯ'}
						linkTo={'https://dikidi.net/922352?p=1.pi-mi&o=11&m=3185028'}
					/>
				</div>
			</div>
		</>
	)
}

export default Specialists
