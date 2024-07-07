import mockup from "@/assets/images/hero/mockup.svg"
import reviewers from "@/assets/images/hero/reviewers.svg"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="w-full xl:h-[717px]">
            <div className="h-full w-full flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 px-7 xl:px-[5rem] 2xl:px-0 my-[2rem] xl:my-0">

                {/* Text */}
                <div className="xl:w-1/2 flex flex-col justify-center gap-y-7">
                    <div className="flex flex-col xl:flex-row xl:items-center">
                        <Image src={reviewers} alt="reviewers" />
                        <div className="flex flex-col">
                            <span>🌟🌟🌟🌟🌟</span>
                            <span>Join 50,000+ happy users</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[40px] xl:text-[68px] text-gray-900 font-bold leading-tight">Access Quality  <br /> Car
                            Services <br /> Around You
                        </h1>
                        <p className="text-gray-600 text-md xl:w-2/3">
                            Access Quality Car Care Services Around You. <br />
                            From mechanics to detailers, Get connected to top-rated professionsls seamlessly.
                        </p>

                        <div className="flex gap-5">
                            <div className="w-[8rem] bg-black text-white px-3 py-2 rounded-md">
                                <div className="flex flex-col ">
                                    <span className="text-xs">Get It On</span>
                                    <span className="text-sm">Google Play</span>
                                </div>
                            </div>
                            <div className="w-[8rem] bg-black text-white px-3 py-2 rounded-md">
                                <div className="flex flex-col ">
                                    <span className="text-xs">Download on the</span>
                                    <span className="text-sm">App Store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-3 xl:gap-5">
                        <input type="email" placeholder="Enter your email" className="bg-[#F5F5F5] rounded-full h-[50px] xl:w-[260px] px-5" />
                        <button className="bg-brand-500 text-white rounded-full h-[45px] xl:h-[50px] w-[160px]">Stay updated</button>
                    </div>
                </div>

                {/* Mockup */}
                <div className="xl:w-1/2">
                    <Image src={mockup} className="xl:h-[717px] xl:w-[698px]" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Hero