import 'leaflet/dist/leaflet.css';
import './ClickableLeafletMap.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const iconWithText = L.divIcon({
  html: `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img src="./location-pin.png" style="width: 40px; height: 40px;" />
      <span style="
        background: white;
        padding: 6px 10px;
        border-radius: 8px;
        font-size: 13px;
        margin-top: 8px;
        max-width: 300px;
        text-align: center;
        white-space: normal;
        word-break: break-word;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      ">
        Thôn Định Tam, Xã Vĩnh Hảo, Huyện Vĩnh Thạnh, Tỉnh Bình Định
      </span>
    </div>
  `,
  className: '',
  iconSize: [300, 100],
  iconAnchor: [150, 100],
});

const position: [number, number] = [14.133141, 108.787063];
const mapUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

const ClickableLeafletMap = () => {
  return (
    <section className="events-section">
      <h2 className="events-title">BOOKING</h2>
      <div className="map-info-container">
        {/* Map bên trái */}
        <div className="map-wrapper">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-overlay"
          ></a>

          <MapContainer
            center={position}
            zoom={15}
            className="map-container"
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={iconWithText} />
          </MapContainer>
        </div>

        {/* Thông tin bên phải */}
        <div className="info-box">
          <h3 className="info-title">🚗 Thông tin đặt xe SÀI GÒN - VĨNH THẠNH</h3>
          <div className="info-content">
            <p><strong>Nhà xe:</strong> Xe Long Nguyễn</p>
            <p><strong>SĐT:</strong> 098 6074889</p>
            <p><strong>Nhà xe:</strong> Xe Bình Minh Tải</p>
            <p><strong>SĐT:</strong> 081 7299979</p>
            <p><strong>Nhà xe:</strong> Xe Vũ Phong</p>
            <p><strong>SĐT:</strong> 096 169 9077</p>
          </div>

          <h3 className="info-title">🏨 Thông tin khách sạn</h3>
          <div className="info-content">
            <p><strong>Tên:</strong> Hồng Trang Hotel</p>
            <p><strong>Địa chỉ:</strong> 74 Nguyễn Huệ, Vĩnh Hảo, Vĩnh Thạnh, Bình Định</p>
            <p><strong>SĐT:</strong> 0379 877 917</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickableLeafletMap;
