import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardUser from "./ui/cardUser";
import Line from "./ui/line";

const Notifications = () => {
  return (
    <div className="max-h-64 ">
      <Carousel className="h-full">
        <div className="flex flex-col  px-2 text-sm font-medium h-full">
          <div className="flex  w-full justify-between items-center opacity-50 px-3">
            <div>Уведомления</div>
            <div className="flex items-center ">
              <CarouselPrevious variant="nav" className="-translate-y-0 " />
              <CarouselNext variant="nav" className="-translate-y-0" />
            </div>
          </div>
          <div className="bg-white rounded-2xl  h-full ">
            <CarouselContent className="h-full">
              <CarouselItem>
                <CardUser />
                <Line className="border-[0.2px] my-0" />
                <CardUser />
                <Line className="border-[0.2px] my-0" />
                <CardUser />
                <Line className="border-[0.2px] my-0" />
                <CardUser />
              </CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Notifications;
