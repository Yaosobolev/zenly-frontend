import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { connectToSocket } from "@/api/config";
import { useParams } from "react-router-dom";
import { useGeolocation } from "@/api/hooks/useGeolocation";
import { FriendLocation } from "@/types/location";
import { friendshipRequest } from "@/types/friendship";

const Home: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const position = useGeolocation();
  const [friendsLocations, setFriendsLocations] = useState<FriendLocation[]>(
    []
  );

  const handleRequest = (data: FriendLocation) => {
    console.log("гео-друга", data);
    console.log("тип гео-друга", typeof data);

    setFriendsLocations((prevLocations) => {
      const existingFriendIndex = prevLocations.findIndex(
        (friend) => friend.data.id === data.data.id
      );
      if (existingFriendIndex !== -1) {
        const updatedLocations = [...prevLocations];
        updatedLocations[existingFriendIndex] = data;
        return updatedLocations;
      } else {
        return [...prevLocations, data];
      }
    });
  };

  const removeRequest = (id: number) => {
    console.log(id);
    setFriendsLocations((prev) => prev.filter((req) => req.data.id !== id));
  };

  const addRequest = (data: { data: friendshipRequest }) => {
    const newFriend = data.data.sender || data.data.receiver;

    const dataFriendLocation = {
      data: {
        latitude: newFriend!.location!.latitude,
        longitude: newFriend!.location!.longitude,
        usename: newFriend!.username,
        id: newFriend!.id,
      },
    };
    setFriendsLocations((prev) => [...prev, dataFriendLocation]);
    console.log("new-geo-friend", data.data);
  };

  useEffect(() => {
    const socket = connectToSocket(Number(userId));

    socket.on("friend-geo", handleRequest);
    socket.on("delete-geo-friend", (data: { data: friendshipRequest }) => {
      console.log(data);
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
