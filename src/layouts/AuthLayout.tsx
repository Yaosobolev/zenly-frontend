import { BiBadgeCheck } from "react-icons/bi";
const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen  bg-slate-100 relative z-10 ">
      <div className=" flex items-center size-full px-16 container  ">
        <div className="flex gap-x-24">
          <div className=" w-1/2  ">
            <div className="absolute top-[10%] left-[35%] w-[500px] h-[500px] rounded-full  bg-purple-500 blur-[90px] -z-20 animate-blob "></div>
            <div className="absolute top-[25%] left-[25%] w-[500px] h-[500px] rounded-full  bg-blue-500 blur-[90px]  -z-10 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[40%] left-[15%] w-[500px] h-[500px] rounded-full  bg-green-500 blur-[90px]  -z-20 animate-blob animation-delay-4000"></div>
            <h1 className="text-violet-950 text-5xl font-bold z-10">
              Твои друзья всегда на горизонте!
            </h1>
            <div className="flex flex-col  items-end gap-y-16 mt-20 z-50">
              <div className=" flex items-start  gap-x-6">
                <div className="">
                  <BiBadgeCheck className="  text-violet-950 size-16" />
                </div>
                <div className="flex flex-col gap-y-5">
                  <h2 className="text-white text-2xl font-semibold">
                    Простое и быстрое подключение
                  </h2>
                  <p className="text-white text-base">
                    Приложение разработано с упором на простоту использования,
                    что делает процесс отслеживания друзей максимально
                    интуитивным и комфортным.
                  </p>
                </div>
              </div>
              <div className=" flex items-start  gap-x-6">
                <div className="">
                  <BiBadgeCheck className="  text-violet-950 size-16" />
                </div>
                <div className="flex flex-col gap-y-5">
                  <h2 className="text-white text-2xl font-semibold">
                    Простое и быстрое подключение
                  </h2>
                  <p className="text-white text-base">
                    Приложение разработано с упором на простоту использования,
                    что делает процесс отслеживания друзей максимально
                    интуитивным и комфортным.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-1/2  flex">
            <div className="w-full py-16 rounded-3xl bg-white ">
              <div className=" flex flex-col items-center">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
