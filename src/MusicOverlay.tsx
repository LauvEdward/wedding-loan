import { useEffect, useState } from 'react'
import './MusicOverlay.css'

const MusicOverlay = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="music-overlay">
      <div className="overlay-content">
        🎵 Có nhau mình cưới
      </div>
    </div>
  )
}

export default MusicOverlay
