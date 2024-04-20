import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Mountain1 from '../Assets/1.jpg'
import Mountain2 from '../Assets/2.jpg'
import Mountain3 from '../Assets/5.jpg'
import Mountain4 from '../Assets/4.jpg'

function Destination (){
    return(
        <>
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours gives you the opportunity to see a lot, within a time frame.</p>
        
            <DestinationData
               className='first-des'
               heading='Jammu and Kashmir'
               text='Jammu and Kashmir is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947 and between India and China since 1959.The Line of Control separates Jammu and Kashmir from the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan in the west and north. It lies to the north of the Indian states of Himachal Pradesh and Punjab and to the west of Ladakh which is administered by India as a union territory.'
               img1={Mountain1}
               img2={Mountain2}
            />

            <DestinationData
               className='first-des-reverse'
               heading='Goa'
               text='Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is Indias smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states, two and a half times as high as the GDP per capita of the country as a whole. The Eleventh Finance Commission of India named Goa the best-placed state because of its infrastructure and Indias National Commission on Population rated it as having the best quality of life in India.'
               img1={Mountain3}
               img2={Mountain4}
            />
        
        </div>
        
        </>
    )
}

export default Destination;