import MKService from '../assets/MKService-B.png';
export default function Imagen(){
    return(
        <div style={{marginRight: '10px'}}>
            {/* <picture>
                <source srcSet={MKService} width={20px} height={auto}/>
            </picture> */}
            <img
                src={MKService}
                alt="MARKET SERVICE Logo"
                width={100}
                height="auto"
                style={{ objectFit: 'contain' }}
            />
        </div>
    )
}