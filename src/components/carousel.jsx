import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../stiles/carousel.css'

export default function LogoCarousel() {
    const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    return (
        <div className="logo-wrapper">
            <div className="logo-track">
                {logos.concat(logos).map((n, index) => (
                    <img
                        key={index}
                        src={`/${n}.png`}
                        alt=""
                        className="logo-img"
                    />
                ))}
            </div>
        </div>
    )
}
