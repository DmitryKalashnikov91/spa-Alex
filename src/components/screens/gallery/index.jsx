import styles from './Gallery.module.scss'

const Gallery = () => {
	let data = [
		{
			id: 1,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/1.jpg?alt=media&token=57608300-0288-4287-b92f-cb07bb41d1d3',
		},
		{
			id: 2,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/2.jpg?alt=media&token=b56591ee-8ac8-4220-b154-7a4e31392272',
		},
		{
			id: 3,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/3.jpg?alt=media&token=e6126e50-80c2-4935-98e3-e6f1d4d06b11',
		},
		{
			id: 4,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/4.jpg?alt=media&token=4bb68044-9e14-4e0e-8103-3734565169fd',
		},
		{
			id: 5,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/5.jpg?alt=media&token=01e5cb9e-20d6-444f-9d53-3c65a2cf9537',
		},
		{
			id: 6,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/6.jpg?alt=media&token=e06733c6-3b2b-4e7f-886a-4ea5cfda3d70',
		},
		{
			id: 7,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/7.jpg?alt=media&token=59ec8ee1-0135-4fd3-9578-2540905d5c4e',
		},
		{
			id: 8,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/8.jpg?alt=media&token=2ef951aa-c0f0-48ed-a716-4751f01d4f4f',
		},
		{
			id: 9,
			imgSrc:
				'https://firebasestorage.googleapis.com/v0/b/fast-company-fire.appspot.com/o/9.jpg?alt=media&token=72b6e61d-0624-499f-a97f-14c50000edad',
		},
	]

	return (
		<>
			<div className={styles.Gallery}>
				{data.map(({ id, imgSrc }) => (
					<div className={styles.Gallery_pics} key={id}>
						<img src={imgSrc} style={{ with: '100%' }} />
					</div>
				))}
			</div>
		</>
	)
}
export default Gallery
