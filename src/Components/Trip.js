import './TripStyles.css';
import TripData from './TripData';
import Trip1 from '../Assets/4.jpg';
import Trip2 from '../Assets/5.jpg';
import Trip3 from '../Assets/6.jpg';

function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className='tripcard'>
                <TripData
                image={Trip1}
                heading='Trip in Indonesia'
                text='The Indonesian archipelago has been a valuable region for trade since at least the seventh century when the Srivijaya and later Majapahit Kingdoms traded with entities from mainland China and the Indian subcontinent. Local rulers gradually absorbed foreign influences from the early centuries, and Hindu and Buddhist kingdoms flourished. Sunni traders and Sufi scholars later brought Islam, and European powers fought one another to monopolise trade in the Spice Islands of Maluku during the Age of Discovery.'
                />

                <TripData
                image={Trip2}
                heading='Trip in Malaysia'
                text='The Indonesian archipelago has been a valuable region for trade since at least the seventh century when the Srivijaya and later Majapahit Kingdoms traded with entities from mainland China and the Indian subcontinent. Local rulers gradually absorbed foreign influences from the early centuries, and Hindu and Buddhist kingdoms flourished. Sunni traders and Sufi scholars later brought Islam, and European powers fought one another to monopolise trade in the Spice Islands of Maluku during the Age of Discovery.'
                />

                <TripData
                image={Trip3}
                heading='Trip in France'
                text='The Indonesian archipelago has been a valuable region for trade since at least the seventh century when the Srivijaya and later Majapahit Kingdoms traded with entities from mainland China and the Indian subcontinent. Local rulers gradually absorbed foreign influences from the early centuries, and Hindu and Buddhist kingdoms flourished. Sunni traders and Sufi scholars later brought Islam, and European powers fought one another to monopolise trade in the Spice Islands of Maluku during the Age of Discovery.'
                />
             
            </div>
        </div>
    )
}

export default Trip;