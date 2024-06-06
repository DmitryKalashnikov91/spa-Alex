import Image from 'next/image'
import { useRouter } from 'next/router'
import ButtonElement from '../button/ButtonElement'
import styles from './Main.module.scss'

const MainContent = () => {
	const router = useRouter()
	return (
		<div className={styles.Main}>
			<Image src='/groupmass.png' alt='massage' width={500} height={500} />

			<div className={styles.Main_content}>
				<div className='mt-40 text-xl text-center text-white'>
					<ButtonElement
						content={'ЗАПИСАТЬСЯ'}
						linkTo={'https://dikidi.net/g367474?p=0.sp'}
					/>
				</div>
			</div>
		</div>
	)
}

export default MainContent
