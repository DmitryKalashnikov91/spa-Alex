import Layout from '@/components/layout/Layout'
import {FC} from 'react'


const Contacts: FC = () => {
  return (
    <Layout>
      <div className='m-8'>
        <h2 className='text-white'>Spa ALex Массажный кабинет</h2>
        <p className='text-white'>находится в ТЦ "Филион" ст. метро Фили, ул. Багратионовский пр-д, дом 5</p>
      </div>
      <div className='mt-10 mx-3' style={{position: 'relative', overflow:'hidden'}}>
        <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>
          Москва
          </a>
          <a href="https://yandex.ru/maps/213/moscow/?indoorLevel=1&ll=37.509590%2C55.744104&mode=routes&rtext=~55.744272%2C37.509376&rtt=mt&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D62360509408&utm_medium=mapframe&utm_source=maps&z=19" style={{color:'#eee',fontSize:'12px', position:'absolute', top:'14px'}}>
            Багратионовский проезд, 5: как доехать на автомобиле, общественным транспортом или пешком – Яндекс Карты
            </a>
            <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.509590%2C55.744104&mode=routes&rtext=~55.744272%2C37.509376&rtt=mt&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D62360509408&z=19" width="560" height="400" frameBorder="1"  style={{position:'relative'}}></iframe></div>
    </Layout>
    
  )
}

export default Contacts