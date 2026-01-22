import mockupImage from "@/assets/mockup.png";

function Intro() {
  return (
    <div className="flex justify-center items-center relative">
      <div className="flex flex-col gap-2 lg:gap-4 absolute max-w-1/4 lg:max-w-1/6 left-4 lg:left-0 top-4 lg:top-48">
        <h3 className="text-2xl lg:text-8xl font-bold">Creative</h3>
        <p className="text-sm lg:text-lg">
          lorem Ipsum is simply dummy text of the printing and.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 absolute max-w-1/4 lg:max-w-1/6 right-4 lg:right-48 top-4 lg:top-48">
        <h3 className="text-2xl lg:text-8xl font-bold">Coder</h3>
        <p className="text-sm lg:text-lg">
          lorem Ipsum is simply dummy text of the printing and .
        </p>
      </div>
      <div className="">
        <img src={mockupImage} alt="mock up image" className=" max-h-[80vh]" />
      </div>
    </div>
  );
}

export default Intro;
