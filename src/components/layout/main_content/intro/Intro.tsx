import mockupImage from "@/assets/header-intro.png";

function Intro() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="flex flex-col gap-2 lg:gap-4 absolute max-w-2/4 lg:max-w-2/6 left-0 lg:left-38 top-4 lg:top-48">
        <h3 className="text-2xl lg:text-8xl font-bold text-primary"> Creative Coder</h3>
        <p className="text-xs lg:text-lg text-primary">
            Bridging the gap between 13 years of business insights and technical execution to build effective, user-friendly digital products.
        </p>
      </div>
      <div className="">
        <img src={mockupImage} alt="mock up image" className=" max-h-[80vh]" />
      </div>
    </div>

    // <div className="flex justify-center items-center relative">
    //     <div className="flex flex-col gap-2 lg:gap-4 absolute max-w-1/4 lg:max-w-1/6 left-4 lg:left-0 top-4 lg:top-48">
    //         <h3 className="text-2xl lg:text-8xl font-bold text-primary">
    //             Creative
    //         </h3>
    //         <p className="text-sm lg:text-lg text-primary">
    //             Modern business architecture backed by years of strategic market expertise
    //         </p>
    //     </div>
    //     <div className="flex flex-col gap-2 lg:gap-4 absolute max-w-1/4 lg:max-w-1/6 right-4 lg:right-48 top-4 lg:top-48">
    //         <h3 className="text-2xl lg:text-8xl font-bold text-primary">Coder</h3>
    //         <p className="text-sm lg:text-lg text-primary">
    //             Turning complex requirements into clean, readable, and useful code
    //         </p>
    //     </div>
    //     <div className="">
    //         <img src={mockupImage} alt="mock up image" className=" max-h-[80vh]" />
    //     </div>
    // </div>
  );
}

export default Intro;
