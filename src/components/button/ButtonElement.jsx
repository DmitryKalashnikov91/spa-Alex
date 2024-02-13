import Link from 'next/link'
import styles from './Button.module.scss'

const ButtonElement = ({ content, linkTo }) => {
	return (
		<button className={styles.Button}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='250'
				height='70'
				viewBox='0 0 275 70'
				fill='none'
			>
				<path
					d='M16 17.5V1H259V17.5V26.25V26.8244L259.496 27.1138L273.015 35L259.496 42.8862L259 43.1756V43.75V52.5V69H16V52.5V43.75V43.1756L15.5039 42.8862L1.98463 35L15.5039 27.1138L16 26.8244V26.25V17.5Z'
					fill='#524336'
					stroke='#BB8C5F'
					strokeWidth='2'
				/>
			</svg>
			<Link href={linkTo}>{content}</Link>
		</button>
	)
}

export default ButtonElement
