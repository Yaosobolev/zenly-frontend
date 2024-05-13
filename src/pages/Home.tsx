import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Home: React.FC = () => {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [51.785112, 55.10018],
          zoom: 18,
          controls: [],
        }}
        className="h-screen"
      >
        <Placemark geometry={[51.785112, 55.10018]} />
      </Map>
    </YMaps>
  );
};

export default Home;
