import { Carousel } from "@material-tailwind/react";
import { Img1 } from "../assets/images";
import { Img2 } from "../assets/images";
import { Img3 } from "../assets/images";
import { Img4 } from "../assets/images";
import { Img5 } from "../assets/images";

const CarouselDefault= () => {
  return (
    <Carousel className="rounded-xl">
      <img
        src={Img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={Img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={Img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={Img4}
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src={Img5}
        alt="image 5"
        className="h-full w-full object-cover"
      />

    </Carousel>
  );
}

export default CarouselDefault