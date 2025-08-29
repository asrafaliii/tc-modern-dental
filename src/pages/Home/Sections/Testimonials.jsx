import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../../../components/Title";

const videoTestimonials = [
  {
    url: "https://www.youtube.com/embed/hO0nhizfHYA", // First video
  },
  {
    url: "https://www.youtube.com/embed/00dHjNRLsrs", // Second video
  },
  {
    url: "https://www.youtube.com/embed/hO0nhizfHYA", // Repeat or add more
  },
  {
    url: "https://www.youtube.com/embed/00dHjNRLsrs", // Second video
  }
];

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -top-15 right-12 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700 hover:text-gray-800 text-xl" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -top-15 right-4 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700 hover:text-gray-800 text-xl" />
  </div>
);

export default function Testimonials() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24 py-16 relative">
        <div className="flex justify-between items-center mb-6">
          <Title
            subtitle="What Our Patients Say"
            title="Real Stories, Real Smiles"
            align="start"
          />
        </div>

        <Slider {...settings}>
          {videoTestimonials.map((video, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.url}
                    title={`Testimonial Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
