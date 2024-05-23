import React, { useEffect, useState } from "react";
import CardUser from "./cardUser";
import { useGetFriends } from "@/api/hooks/useFriendship";
import { friendshipRequest } from "@/types/friendship";
import { useParams } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";
import { connectToSocket } from "@/api/config";

export type UserListProps = {
  isFriends?: boolean;
  isMessages?: boolean;
  searchValue?: string;
};

const UserList: React.FC<UserListProps> = ({
  isFriends,
  isMessages,
  searchValue,
}) => {
  const [requests, setRequests] = useState<friendshipRequest[]>([]);

  const [searchResults, setSearchResults] = React.useState<friendshipRequest[]>(
    []
  );

  const { userId } = useParams<{ userId: string }>();
  const userIdString: string = userId as string;
  const { isLoading, data } = useGetFriends(userIdString);

  const handleRequest = (data: { data: friendshipRequest }) => {
    console.log(data);
    setRequests((prev) => [...prev, data.data]);
    setSearchResults((prev) => [...prev, data.data]);
  };

  const removeRequest = (id: number) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
    setSearchResults((prev) => prev.filter((req) => req.id !== id));
  };

  useEffect(() => {
    if (data) {
      setRequests([...data]);
      setSearchResults([...data]);
    }
  }, [data]);

  useEffect(() => {
    const socket = connectToSocket(Number(userId));

    socket.on("new-friend", handleRequest);

    socket.on("delete-friend", (data: { data: friendshipRequest }) => {
      removeRequest(data.data.id);
    });

    return () => {
      socket.off("delete-friend", (data) => {
        removeRequest(data.id);
      });

      socket.off("new-friend", handleRequest);
    };
  }, [connectToSocket]);

  useEffect(() => {
    if (isMessages && requests) {
      if (searchValue!.trim() === "") {
        setSearchResults(requests);
        console.log("пусто", searchValue!.length);
      } else {
        const newFilteredData = requests.filter(
          (item) =>
            item.sender?.username
              .toLowerCase()
              .includes(searchValue!.toLowerCase()) ||
            (item.receiver &&
              item.receiver.username
                .toLowerCase()
                .includes(searchValue!.toLowerCase()))
        );
        setSearchResults(newFilteredData);
      }
    }
  }, [searchValue, requests]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-2 px-1 mt-10 h-screen overflow-auto scroll-my-2">
      {searchResults.length > 0 ? (
        searchResults.map((request, index) => (
          <div key={index} className="w-full">
            <CardUser
              avatar={PiUserCircleFill}
              data={request}
              isFriends={isFriends}
              isMessages={isMessages}
              onRequest={removeRequest}
            />
          </div>
        ))
      ) : (
        //! ДОБАВИТЬ НОРМ 404
        <div>Нет друзей </div>
      )}
    </div>
  );
};

export default UserList;
