import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Tutorial.css";
import { Autoplay } from "swiper/modules";
import { useCallback, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Tutorials = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="w-full flex flex-col gap-5 my-7 bg-[#151718] rounded-[1.5rem] py-4 px-3">
      <div className="flex justify-between items-center">
        <h2 className="font-valorant text-center mb-4 text-sm sm:text-lg md:text-xl text-white">
          TUTORIALS
        </h2>
        <div className="flex gap-3">
          <div
            onClick={handlePrevious}
            className="rounded-md border hover:bg-[#F6B8FC] p-2 border-[#F6B8FC] hidden lg:block cursor-pointer"
          >
            <ChevronLeft
              className="icon iconleft transition-colors"
              // color="#F6B8FC"
            />
          </div>
          <div
            onClick={handleNext}
            className="rounded-md border p-2 border-[#F6B8FC] hidden lg:block cursor-pointer hover:bg-[#F6B8FC] transition-colors"
          >
            <ChevronRight className="iconright icon transition-colors" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          modules={[Autoplay]}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="mySwiperr mx-auto"
        >
          <SwiperSlide className="w-[300px] lg:w-[480px] !bg-transparent">
            <div className="w-full flex flex-col gap-3 justify-center">
              <iframe
                className="w-full h-[220px] rounded-lg"
                src="https://www.youtube.com/embed/cdUxwm-WjHo?si=sqRJ3dvWALhH7lw3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="text-base text-center text-white">
                How to withdraw ICP from Gamebloc
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[300px] lg:w-[480px] !bg-transparent">
            <div className="w-full flex flex-col gap-3 justify-center ">
              <iframe
                className="w-full h-[220px] rounded-lg"
                src="https://www.youtube.com/embed/de61Hplfv-8?si=jw8yOoO3I0cWnMiK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="text-base text-center text-white">
                How to buy ICP on Gamebloc
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[300px] lg:w-[480px] !bg-transparent">
            <div className="w-full flex flex-col gap-3 justify-center">
              <iframe
                className="w-full h-[220px] rounded-lg"
                src="https://www.youtube.com/embed/JbUwfy5TjK8?si=LnS5Ib-JGz9V37p1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="text-base text-center text-white">
                How to Create a Squad on Gamebloc
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tutorials;
