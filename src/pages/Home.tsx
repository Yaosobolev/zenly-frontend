import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect } from "react";
import { connectToSocket } from "@/api/config";
import { useParams } from "react-router-dom";
import {
  useFriendsLocations,
  useGeolocation,
  useGetLocations,
} from "@/api/hooks/useLocation";
import { friendshipRequest } from "@/types/friendship";

const Home: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { data } = useGetLocations(userId!);
  const position = useGeolocation();

  const { friendsLocations, handleRequest, removeRequest, addRequest } =
    useFriendsLocations(data);

  useEffect(() => {
    const socket = connectToSocket(Number(userId));

    socket.on("friend-geo", handleRequest);
    socket.on("delete-geo-friend", (data: { data: friendshipRequest }) => {
      removeRequest(data.data.sender?.id || data.data.receiver!.id);
    });
    socket.on("new-geo-friend", addRequest);

    return () => {
      socket.off("friend-geo");
      socket.off("delete-geo-friend");
      socket.off("new-geo-friend");
    };
  }, [connectToSocket, userId]);

  return (
    <YMaps>
      <Map
        defaultState={{
          center: position
            ? [position.latitude, position.longitude]
            : [51.785112, 55.10018],
          zoom: 18,
          controls: [],
        }}
        className="h-screen"
      >
        {position && (
          <Placemark geometry={[position.latitude, position.longitude]} />
        )}
        {friendsLocations.map((friend, index) => (
          <Placemark
            key={index}
            geometry={[friend.data.latitude, friend.data.longitude]}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default Home;
