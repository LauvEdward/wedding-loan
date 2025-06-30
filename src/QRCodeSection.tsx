import './QRCodeSection.css'

const QRCodeSection = () => {
    return (
        <div className="qr-section">
            <h3 className="qr-title">📍 Quét mã để gửi lời chúc & mừng cưới</h3>
            <img
                src="./assets/qrcode.jpeg"
                alt="Mã QR ngân hàng"
                className="qr-image"
            />
            <p className="qr-note">💳 Ngân hàng Quốc Tế VIB</p>
            <p className="qr-note">👤 Nguyễn Thị Châu Loan</p>
            <p className="qr-thank">
                Món quà của bạn là niềm vui và lời chúc phúc quý giá dành cho chúng mình 💖
            </p>
        </div>
    )
}

export default QRCodeSection
