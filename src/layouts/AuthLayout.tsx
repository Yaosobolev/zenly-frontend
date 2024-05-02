import { BiBadgeCheck } from "react-icons/bi";
const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-slate-100 relative z-10 ">
      <div className="decorative ">
        <div className="absolute top-[10%] left-[35%] size-[500px] rounded-full bg-purple-500 blur-[90px] -z-20 animate-blob max-991:size-[400px] max-700:size-[300px] max-700:fixed screen-h-md:size-[400px]"></div>
        <div className="absolute top-[25%] left-[25%] size-[500px] rounded-full bg-blue-500 blur-[90px] -z-10 animate-blob animation-delay-2000 max-991:size-[400px] max-700:size-[300px] max-700:fixed screen-h-md:size-[400px]"></div>
        <div className="absolute top-[40%] left-[15%] size-[500px] rounded-full bg-green-500 blur-[90px] -z-20 animate-blob animation-delay-4000 max-991:size-[400px] max-700:size-[300px] max-700:fixed screen-h-md:size-[400px]"></div>
      </div>
      <div className="flex items-center size-full px-16 container max-991:block max-400:px-8">
        <div className="flex gap-x-24 max-991:h-full">
          <div className="w-1/2 max-991:hidden">
            <h1 className="text-violet-950 text-5xl font-bold z-10 max-1185:text-4xl ">
              Твои друзья всегда на горизонте!
            </h1>
            <div className="flex flex-col items-end gap-y-16 mt-20 z-50 max-1185:mt-14 max-1185:gap-y-12 ">
              <div className="flex items-start gap-x-6 max-1185:gap-x-4">
                <div className="">
                  <BiBadgeCheck className="text-violet-950 size-16 max-1185:size-11 max-lg:size-10" />
                </div>
                <div className="flex flex-col gap-y-5 max-1185:gap-y-3">
                  <h2 className="text-white text-2xl font-semibold max-lg:text-xl ">
                    Простое и быстрое подключение
                  </h2>
                  <p className="text-white text-base max-lg:text-sm">
                    Приложение разработано с упором на простоту использования,
                    что делает процесс отслеживания друзей максимально
                    интуитивным и комфортным.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-6 max-1185:gap-x-4">
                <div className="">
                  <BiBadgeCheck className="text-violet-950 size-16 max-1185:size-11 max-lg:size-10" />
                </div>
                <div className="flex flex-col gap-y-5 max-1185:gap-y-3">
                  <h2 className="text-white text-2xl font-semibold max-lg:text-xl">
                    Простое и быстрое подключение
                  </h2>
                  <p className="text-white text-base max-lg:text-sm">
                    Приложение разработано с упором на простоту использования,
                    что делает процесс отслеживания друзей максимально
                    интуитивным и комфортным.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex max-991:mx-auto max-991:items-center max-991:w-3/4 max-550:!w-full ">
            <div className="w-full py-16 rounded-3xl bg-white max-700:px-4 ">
              <div className="flex flex-col items-center">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
