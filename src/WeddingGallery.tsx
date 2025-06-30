import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './WeddingGallery.css'

const WeddingGallery = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="wedding-gallery" data-aos="fade-up">
            <h3 className="gallery-title">📸 Hình cưới kỷ niệm</h3>
            <div className="gallery-grid">
                <img
                    src="./assets/1.jpg" alt="1" />
                <img
                    src="./assets/2.jpg" alt="2" />
                <img
                    src="./assets/3.jpg" alt="3" />
                <img
                    src="./assets/4.jpg" alt="4" />
                <img
                    src="./assets/5.jpg" alt="5" />
              <img
                src="./assets/6.jpg" alt="6" />
            </div>
        </div>
    )
}

export default WeddingGallery
