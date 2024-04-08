import styles from './Reviews.module.scss'
const Reviews = () => {
	return (
		<div className={styles.Reviews} id='reviews'>
			<iframe
				title='reviews yandex maps'
				style={{
					width: '100%',
					height: '100%',
					border: '1px solid #e6e6e6',
					borderRadius: '8px',
				}}
				src='https://yandex.ru/maps-reviews-widget/62360509408?comments'
			></iframe>
			<a
				href='https://yandex.ru/maps/org/spafili/62360509408/'
				target='_blank'
				style={{
					boxSizing: 'border-box',
					textDecoration: 'none',
					color: '#b3b3b3',
					fontSize: '10px',
					fontFamily: 'YS Text,sans-serif',
					padding: '0 20px',
					position: 'absolute',
					bottom: '8px',
					width: '100%',
					textAlign: 'center',
					left: '0',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: 'block',
					maxHeight: '14px',
					whiteSpace: 'nowrap',
					padding: '0 16px',
					boxSizing: 'border-box',
				}}
			>
				SpaFili на карте Москвы — Яндекс Карты
			</a>
		</div>
	)
}

export default Reviews
