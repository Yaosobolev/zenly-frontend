import React, { useEffect, useMemo } from "react";

import { useParams } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

import { connectToSocket } from "@/api/config";
import { useGetFriends } from "@/api/hooks/useFriendship";
import { useFriendStore } from "@/store/friendshipStore";
import { friendshipRequest } from "@/types/friendship";

import { UserCard } from "../";

export type UserListProps = {
  isFriends?: boolean;
  isMessages?: boolean;
};

export const UserList: React.FC<UserListProps> = ({
  isFriends,
  isMessages,
}) => {
  const { friends, searchValue, addFriend, removeFriend } = useFriendStore();

  const [searchResults, setSearchResults] = React.useState<friendshipRequest[]>(
    [...friends]
  );

  const { userId } = useParams<{ userId: string }>();
  const userIdString: string = userId as string;
  const { isLoading } = useGetFriends(userIdString);

  const handleRequest = (data: { data: friendshipRequest }) => {
    addFriend(data.data);
    setSearchResults((prev) => [...prev, data.data]);
  };

  const removeRequest = (id: number) => {
    removeFriend(id);
    setSearchResults((prev) => prev.filter((req) => req.id !== id));
  };

  useEffect(() => {
    const socket = connectToSocket(Number(userId));

    socket.on("new-friend", handleRequest);

    socket.on("delete-friend", (data: { data: friendshipRequest }) => {
      removeRequest(data.data.id);
    });

    return () => {
      socket.off("delete-friend");
      socket.off("new-friend");
    };
  }, [connectToSocket, userId]);

  const filteredFriends = useMemo(() => {
    if (isMessages && !friends) return [];

    if (searchValue.trim() === "" || !isMessages) {
      console.log("пусто", searchValue.length);
      return friends;
    } else {
      const lowercasedSearchValue = searchValue.toLowerCase();
      return friends.filter((item) => {
        const senderUsername = item.sender?.username.toLowerCase();
        const receiverUsername = item.receiver?.username.toLowerCase();
        return (
          senderUsername?.includes(lowercasedSearchValue) ||
          receiverUsername?.includes(lowercasedSearchValue)
        );
      });
    }
  }, [searchValue, friends, isMessages]);

  useEffect(() => {
    setSearchResults(filteredFriends);
  }, [filteredFriends]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 px-1 mt-10 h-screen overflow-auto scroll-my-2">
      {searchResults.length > 0 ? (
        searchResults.map((request, index) => (
          <div key={index} className="w-full">
            <UserCard
              avatar={PiUserCircleFill}
              data={request}
              isFriends={isFriends}
              isMessages={isMessages}
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
