import { useParams } from "react-router-dom";
import { useSetLocationRequest } from "./useLocation";
import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const { userId } = useParams<{ userId: string }>();
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const setLocationRequestMutation = useSetLocationRequest();

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log("position", position);
        // console.log("position", countRef.current);
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setPosition(coords);

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
  return position;
};
