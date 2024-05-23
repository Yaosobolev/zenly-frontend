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

  const { userId } = useParams<{ userId: string }>();
  const userIdString: string = userId as string;
  const { isLoading, data } = useGetFriends(userIdString);

  const handleRequest = (data: { data: friendshipRequest }) => {
    console.log(data);
    setRequests((prev) => [...prev, data.data]);
  };

  const removeRequest = (id: number) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  useEffect(() => {
    if (data) {
      setRequests([...data]);
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

  //   if (isMessages) {
  //     useEffect(() => {
  //       if (data && searchValue && searchValue.trim() === "") {
  //         setRequests(data);
  //       } else {
  //         const newFilteredData = data!.filter(
  //           (item) =>
  //             item.sender?.username
  //               .toLowerCase()
  //               .includes(searchValue.toLowerCase()) ||
  //             (item.receiver &&
  //               item.receiver.username
  //                 .toLowerCase()
  //                 .includes(searchValue.toLowerCase()))
  //         );
  //         setRequests(newFilteredData);
  //       }
  //     }, [searchValue, data]);
  //   }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-2 px-1 mt-10 h-screen overflow-auto scroll-my-2">
      {requests.length > 0 ? (
        requests.map((request, index) => (
          <div key={index} className="w-full">
            <CardUser
              avatar={PiUserCircleFill}
              data={request}
              isFriends={isFriends}
              isMessages={isMessages}
              onRequest={removeRequest}
              //   onRequest={removeRequest}
            />

            {/* <Line
              className={
                index < requests.length - 1 ? `border-[0.2px] my-0 ` : "hidden"
              }
            /> */}
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
