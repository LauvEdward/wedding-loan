import { useEffect, useRef } from 'react'
import WeddingCard from './WeddingCard'
import WeddingGallery from "./WeddingGallery.tsx";
import QRCodeSection from "./QRCodeSection.tsx";
import WeddingEvents from "./WeddingEvents.tsx";

function App() {
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const tryPlayMusic = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.5
                audioRef.current.play().catch((err) => {
                    console.log('Chặn autoplay:', err.message)
                })
            }
            document.removeEventListener('click', tryPlayMusic)
        }

        // Gắn sự kiện click đầu tiên
        document.addEventListener('click', tryPlayMusic)
    }, [])

    return (
        <div style={{ backgroundColor: '#fde7ef' }}>
            <audio
                ref={audioRef}
                loop
                preload="auto"
                style={{ display: 'none' }}
            >
                <source src="./audio/wedding-music.mp3" type="audio/mp3" />
                Trình duyệt không hỗ trợ phát nhạc.
            </audio>
            <WeddingCard />
            <WeddingEvents />
            <WeddingGallery />
            <QRCodeSection />
        </div>
    )
}

export default App
