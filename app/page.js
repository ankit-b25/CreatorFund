import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-white h-[37vh] md:h-[45vh] mb-4 px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold md:text-5xl flex gap-6 md:gap-14 justify-center items-center text-2xl">Buy Me A Chai! <span><img src="/tea.gif" width={88} alt="" /></span></div>

        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Read More</button>
          </Link>
        </div>
      </div>


      {/* Divider */}
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto pt-12 pb-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Your Fans can buy you a Chai</h2>

        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={75} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available for you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={75} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are waiting to contribute financially</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={75} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>


      {/* Divider */}
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto pt-12 pb-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">Learn more about us</h2>

        {/* Responsive Youtube embed */}
        <div className="w-[90%] h-[40vh] md:w-[50%] lg:w-[50%] xl:w-[50%]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/QtaorVNAwbI?si=Rx77uGvnVGu3EIiA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
