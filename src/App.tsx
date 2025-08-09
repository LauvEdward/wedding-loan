import { useRef, useState } from 'react'
import WeddingCard from './WeddingCard'
import WeddingGallery from "./WeddingGallery.tsx"
// import QRCodeSection from "./QRCodeSection.tsx"
import WeddingEvents from "./WeddingEvents.tsx"
import './MusicOverlay.css'
import Countdown from "./Countdown.tsx";
// import ClickableLeafletMap from "./ClickableMap.tsx";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [overlayVisible, setOverlayVisible] = useState(true)

  const handleOverlayClick = () => {
    // Phát nhạc nếu audio tồn tại
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Trình duyệt chặn autoplay:', err)
      })
    }
    // Ẩn overlay
    setOverlayVisible(false)
  }

  return (
    <div style={{ backgroundColor: '#f5f8fa' }}>
      <audio ref={audioRef} loop controls={false} preload="auto" style={{ display: 'none' }}>
        <source src="./audio/wedding-music.mp3" type="audio/mp3" />
        Trình duyệt không hỗ trợ phát nhạc.
      </audio>
      <WeddingCard />

      {overlayVisible && (
        <div className="music-overlay" onClick={handleOverlayClick}>
          <div className="overlay-content">
            <p>🎆 Có nhau mình cưới</p>
            <Countdown />
          </div>
        </div>
      )}

      {/*<WeddingIntroText />*/}
      <WeddingGallery />
      <WeddingEvents />
      {/*<ClickableLeafletMap/>*/}
      {/*<QRCodeSection />*/}
    </div>
  )
}

export default App
