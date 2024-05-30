import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useCallback, useEffect, useRef, useState } from "react";
import { connectToSocket } from "@/api/config";
import { useParams } from "react-router-dom";
import { useSetLocationRequest } from "@/api/hooks/useLocation";

const Home: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const socket = connectToSocket(Number(userId));

  const setLocationRequestMutation = useSetLocationRequest();

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log("position", position);
        // console.log("position", countRef.current);

        setLocationRequestMutation.mutate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          senderId: userId!,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

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
