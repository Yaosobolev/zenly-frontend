import React, { useEffect, useState } from "react";
import CardUser from "./cardUser";
import { useGetFriends } from "@/api/hooks/useFriendship";
import { friendshipRequest } from "@/types/friendship";
import { useParams } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

export type UserListProps = {
  isFriends?: boolean;
};

const UserList: React.FC<UserListProps> = ({ isFriends }) => {
  const [requests, setRequests] = useState<friendshipRequest[]>([]);
  const { userId } = useParams<{ userId: string }>();
  const userIdString: string = userId as string;
  const { isLoading, data } = useGetFriends(userIdString);

  useEffect(() => {
    if (data) {
      setRequests([...data]);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {requests.length > 0 ? (
        requests.map((request, index) => (
          <div key={index} className="w-full ">
            <CardUser
              avatar={PiUserCircleFill}
              data={request}
              isFriends={isFriends}
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
