import './WeddingCard.css'

function WeddingCard() {
    return (
        <div className="invitation-book">
            <div className="invitation-page left-page">
                <img
                    src="./assets/coverphoto.jpg"
                    alt="Ảnh cưới"
                    className="wedding-photo"
                />
            </div>

            {/* Trang phải */}
            <div className="invitation-page right-page">
                <p className="intro">TRÂN TRỌNG KÍNH MỜI</p>
                <p className="intro-sub">Bạn và gia đình</p>
                <p className="desc">Tới dự lễ vu quy của 2 chúng tôi</p>
                <h2 className="name groom">Nguyễn Thị Châu Loan</h2>
                <p className="and">&</p>
                <h2 className="name bride">Lê Đình Phục</h2>

                <p className="ceremony-time">Tiệc rượu 15:00</p>
                <div className="date-box">
                    <span>Thứ Sáu</span>
                    <div className="day">18</div>
                    <span>Tháng 7</span>
                </div>

                <p>(Nhằm 24 tháng 6 năm Ất Tỵ)</p>
                <p>Nhà văn hoá thôn Định Tam<br />Vĩnh Thạnh - Bình Định - Việt Nam</p>

                <p className="footer">Sự hiện diện của quý vị là niềm vinh dự lớn cho gia đình chúng tôi</p>

                <div className="parent-info">
                    <div>
                        <strong>Nhà Gái</strong><br />
                        Họ Tên Mẹ: Phùng Thị Bình
                    </div>
                    <div>
                        <strong>Nhà Trai</strong><br />
                        Họ Tên Bố: Lê Văn Duyệt<br />
                        Họ Tên Mẹ: Lê Thị Diệu
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeddingCard
