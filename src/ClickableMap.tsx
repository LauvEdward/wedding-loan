import 'leaflet/dist/leaflet.css';
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
        55 Võ Văn Dũng, TT. Vĩnh Thạnh, Vĩnh Thạnh, Bình Định, Việt Nam
      </span>
    </div>
  `,
  className: '',
  iconSize: [300, 100],
  iconAnchor: [150, 100],
});

const position: [number, number] = [14.101449, 108.7807371];
const mapUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

const ClickableLeafletMap = () => {
  return (
    <section className="events-section">
      <h2 className="events-title">BOOKING</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          padding: '24px',
          background: '#f9f9f9',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Map bên trái */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '480px', flex: '1 1 400px' }}>
          {/* Overlay click vào Google Map */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
            }}
          ></a>

          <MapContainer
            center={position}
            zoom={15}
            style={{
              height: '100%',
              width: '100%',
              pointerEvents: 'none',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={iconWithText} />
          </MapContainer>
        </div>

        {/* Thông tin bên phải */}
        <div
          style={{
            flex: '1 1 400px',
            background: '#fff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            maxWidth: '480px',
          }}
        >
          {/* Thông tin đặt xe */}
          <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 'bold' }}>🚗 Thông tin đặt xe SÀI GÒN - VĨNH THẠNH</h3>
          <div style={{ lineHeight: '1.6', marginBottom: '16px' }}>
            <p><strong>Nhà xe:</strong> Xe Long Nguyễn</p>
            <p><strong>SĐT:</strong> 098 6074889</p>
            <p><strong>Nhà xe:</strong> Xe Bình Minh Tải</p>
            <p><strong>SĐT:</strong> 081 7299979</p>
            <p><strong>Nhà xe:</strong> Xe Vũ Phong</p>
            <p><strong>SĐT:</strong> 096 169 9077</p>
          </div>

          {/* Thông tin khách sạn */}
          <h3 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 'bold' }}>🏨 Thông tin khách sạn</h3>
          <div style={{ lineHeight: '1.6' }}>
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