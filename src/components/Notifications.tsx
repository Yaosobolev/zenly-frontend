import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PiUserCircleFill } from "react-icons/pi";

import CardUser from "./ui/cardUser";
import Line from "./ui/line";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetFriendRequests } from "@/api/hooks/useFriendship";
import { friendshipRequest, friendshipRequests } from "@/types/friendship";
import { connectToSocket } from "@/api/config";

interface NotificationsProps {
  isCollapsed: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ isCollapsed }) => {
  const handleRequest = (data: friendshipRequest) => {
    setRequests((prev) => prev.concat(data));
  };

  const { userId } = useParams();

  const userIdString: string = userId as string;

  const { isLoading, data } = useGetFriendRequests(userIdString);
  console.log("db", data);

  useEffect(() => {
    connectToSocket(Number(userId)).on(
      "friend-requests",
      (data: friendshipRequest) => {
        console.log("socket", data);
        handleRequest(data);
      }
    );
  }, [connectToSocket]);

  const [requests, setRequests] = useState<friendshipRequest[]>(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-h-64 ">
      <Carousel className="h-full relative">
        <div className="flex flex-col  px-2 text-sm font-medium h-full">
          <div
            className={
              isCollapsed
                ? "flex w-full justify-center items-center opacity-50 px-3 h-8"
                : "flex w-full justify-between items-center opacity-50 px-3"
            }
          >
            <div>Уведомления</div>
            <div
              className={
                isCollapsed
                  ? "absolute right-28 opacity-0"
                  : `flex items-center transition-all delay-700`
              }
            >
              <CarouselPrevious variant="nav" className="-translate-y-0" />
              <CarouselNext variant="nav" className="-translate-y-0" />
            </div>
          </div>
          <div className={"bg-white rounded-2xl  h-full "}>
            <CarouselContent className="h-full">
              <CarouselItem>
                {requests.length > 0
                  ? requests.map((request, id) => (
                      <CardUser
                        avatar={PiUserCircleFill}
                        name={request.sender.username}
                        key={id}
                      />
                    ))
                  : data.length > 0 &&
                    data.map((item: friendshipRequest, id: number) => (
                      <CardUser
                        avatar={PiUserCircleFill}
                        name={item.sender.username}
                        key={id}
                      />
                    ))}
                <CardUser avatar={PiUserCircleFill} name="Max jhon" />

                <Line className="border-[0.2px] my-0" />
              </CarouselItem>
              {/* <CarouselItem>
                <CardUser avatar={PiUserCircleFill} name="Josie Parks" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Marc Allison" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Ricky Oliver" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Mayme Sparks" />
              </CarouselItem>
              <CarouselItem>
                <CardUser avatar={PiUserCircleFill} name="Francisco Horton" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Gavin Rowe" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Alfred Hill" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Rosie Conner" />
              </CarouselItem> */}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Notifications;
