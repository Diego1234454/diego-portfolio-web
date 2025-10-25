import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Home Page - Diego Veliz Web Portfolio',
    description: 'Home Page of Diego Veliz Web Portfolio',
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 from-60% to-black/10 to-30%">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center w-full px-24 gap-6 md:gap-0">
            <div className="flex flex-col items-center justify-center w-full gap-8">
                <h1 className="text-white text-shadow-[0_0_1px_black,0_0_1px_black,0_0_1px_black,0_0_1px_black] text-center xl:text-justify text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-auto font-bold">Hi, My Name is Diego Veliz. I'm Currently Learning Next.JS</h1>
                <p className=" text-gray-300 text-shadow-[0_0_1px_black,0_0_1px_black,0_0_1px_black,0_0_1px_black] text-center xl:text-justify text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl w-auto ">This is where I'm going to be posting all the projects that I have created and will continue to create</p>
                <div className="space-x-8 flex">
                    <a href="/Files/CV_DiegoAllanVelizMedina_2025_ENGLISH.pdf" target="_blank"><div className="text-white font-semibold  bg-gradient-to-br from-blue-600 via-purple-500 to-purple-800 hover:scale-110 transition-transform duration-300 rounded-full text-center p-2 md:p-3 xl:p-4 text-[10px] md:text-md xl:text-lg">CV in English</div></a>
                    <a href="/Files/CV_DiegoAllanVelizMedina_2025_ESPAÑOL.pdf" target="_blank"><div className="text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-500 to-purple-800 hover:scale-110 transition-transform duration-300 rounded-full text-center p-2 md:p-3 xl:p-4 text-[10px] md:text-md xl:text-lg">CV en Español</div></a>
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <img src="images/pfp.jpg" alt="Profile Picture" className="rounded-full w-[160px] md:w-[220px] xl:w-[260px] drop-shadow-2xl/40" />
            </div>
        </div>
    </div>
  );
}
