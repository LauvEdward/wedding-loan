import { useEffect, useState } from 'react'
import './Countdown.css'

const targetDate = new Date('2025-07-18T00:00:00')

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
      setDaysLeft(days)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000 * 60) // cập nhật mỗi phút
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown">
      💒 Còn {daysLeft} ngày nữa là đến lễ cưới!<br />
      📅 Hôn lễ diễn ra vào thứ 6, 18 tháng 07 năm 2025
    </div>
  )
}

export default Countdown
