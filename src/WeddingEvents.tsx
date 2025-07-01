import './WeddingEvents.css'

const WeddingEvents = () => {
    return (
        <section className="events-section">
            <h2 className="events-title">SỰ KIỆN</h2>
            <div className="events-grid">
                {/* Ngày 27 */}
                <div className="event-day">
                    <h3 className="event-date">12 tháng 7 (18 tháng 6 năm Ất Tỵ)</h3>

                    <div className="event-block">
                        <h4 className="event-name">Lễ Đính Hôn<span className="event-time">6:00</span></h4>
                        <p className="event-desc">
                            Lễ vu quy sẽ được cử hành tại tư gia nhà gái trong không khí trang trọng và ấm cúng.
                            Đây là dịp để gia đình hai bên cùng sum họp, trò chuyện thân mật và chứng kiến khoảnh khắc thiêng liêng khi cô dâu chính thức rời gia đình để về nhà chồng, theo nghi thức truyền thống.
                            Buổi lễ là dấu mốc trọng đại, thể hiện sự gắn bó giữa hai gia đình và sự khởi đầu cho cuộc sống hôn nhân của đôi uyên ương, trong sự chúc phúc và yêu thương của người thân, họ hàng và bạn bè.
                        </p>
                    </div>
                </div>

                <div className="event-day">
                    <h3 className="event-date">18 tháng 7 (24 tháng 6 năm Ất Tỵ)</h3>

                    <div className="event-block">
                        <h4 className="event-name">Lễ Vu Quy<span className="event-time">14:00</span></h4>
                        <p className="event-desc">
                            Lễ Vu Quy được cử hành tại tư gia nữ
                        </p>
                    </div>

                    <div className="event-block">
                        <h4 className="event-name">Tiệc rượu <span className="event-time">15:00</span></h4>
                        <p className="event-desc">
                            Khoảnh khắc vui vẻ với bạn bè, đồ uống nhẹ nhàng, giao lưu và chụp hình trước giờ chính thức tại nhà văn hoá thôn Định Tam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeddingEvents
