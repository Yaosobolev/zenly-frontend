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

import io from "socket.io-client";
import { useEffect } from "react";

interface NotificationsProps {
  isCollapsed: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ isCollapsed }) => {
  //   useEffect(() => {
  //     // Создаем экземпляр сокета и подключаемся к серверу
  //     const socket = io("http://localhost:3000"); // Замените адресом вашего сервера и портом
  //     socket.emit("friendRequest", { message: "Hello, server!" });

  //     // Определяем обработчик для получения сообщений от сервера
  //     socket.on("friendRequest", (data) => {
  //       console.log("Received new message from server:", data);
  //     });

  //     // Функция для очистки соединения при размонтировании компонента
  //     return () => {
  //       socket.disconnect();
  //     };
  //   }, []);

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
                  : `flex items-center transition-all delay-700 `
              }
            >
              <CarouselPrevious variant="nav" className="-translate-y-0 " />
              <CarouselNext variant="nav" className="-translate-y-0" />
            </div>
          </div>
          <div className="bg-white rounded-2xl  h-full ">
            <CarouselContent className="h-full">
              <CarouselItem>
                <CardUser avatar={PiUserCircleFill} name="Max jhon" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Nell Chavez" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Caroline Willis" />
                <Line className="border-[0.2px] my-0" />
                <CardUser avatar={PiUserCircleFill} name="Cole King" />
              </CarouselItem>
              <CarouselItem>
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
              </CarouselItem>
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Notifications;
