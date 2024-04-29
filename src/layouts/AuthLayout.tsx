const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen   ">
      <div className="flex items-center justify-center h-full w-full ">
        <div className="absolute w-full h-full bg-gradient-to-r from-violet-200 to-pink-200  blur-[30px] -z-30">
          {children}
        </div>

        <div>
          <div className=" w-96 h-96 bg-white/20  backdrop-blur-lg rounded-2xl shadow-sm">
            <p>lorem23</p>
            <p>lorem23</p>
            <p>lorem23</p>
            <p>lorem23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
// const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
//   return (
//     <div className="h-screen w-screen bg-gradient-to-r from-violet-200 to-pink-200  backdrop-blur-xl ">
//       <div className="flex items-center justify-center h-full w-full ">
//         <div className="w-96 h-96 backdrop-blur-xl bg-white/30">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;
// backdrop-filter backdrop-blur-xl
