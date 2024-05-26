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

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetFriendRequests } from "@/api/hooks/useFriendship";
import { friendshipRequest } from "@/types/friendship";
import { connectToSocket } from "@/api/config";
import { useFriendStore } from "@/store/friendshipStore";

type NotificationsProps = {
  isCollapsed: boolean;
};

const Notifications: React.FC<NotificationsProps> = ({ isCollapsed }) => {
  const { userId } = useParams<{ userId: string }>();
  const userIdString: string = userId as string;

  const { isLoading } = useGetFriendRequests(userIdString);
  const { requests, addRequest } = useFriendStore();

  const handleRequest = (data: { data: friendshipRequest }) => {
    addRequest(data.data);
  };

  useEffect(() => {
    const socket = connectToSocket(Number(userId));

    socket.on("friend-requests", handleRequest);

    return () => {
      socket.off("friend-requests", handleRequest);
    };
  }, [connectToSocket]);

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
          {/* //! еще вариант bg-slate-500/20 */}
          <div className={"bg-white rounded-2xl  h-full "}>
            <CarouselContent className="h-full">
              <CarouselItem>
                {requests.length > 0 ? (
                  requests.map((request, index) => (
                    <div key={index} className="w-full ">
                      <CardUser avatar={PiUserCircleFill} data={request} />
                      <Line
                        className={
                          index < requests.length - 1
                            ? `border-[0.2px] my-0 `
                            : "hidden"
                        }
                      />
                    </div>
                  ))
                ) : (
                  //! ДОБАВИТЬ НОРМ 404
                  <div className="font-bold text-base py-4">Пусто </div>
                )}
              </CarouselItem>
              {/* <CarouselItem>
                <CardUser
                  avatar={PiUserCircleFill}
                  // name="{request.sender.username}"

                />
                <Line className={`border-[0.2px] my-0`} />
              </CarouselItem> */}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Notifications;
