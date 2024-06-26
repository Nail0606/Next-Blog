"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Post from "@/components/Post";
import { PostType } from "@/app/page";

interface Props {
  youMayLikeArray: PostType[];
}

export default function MainCarousel({ youMayLikeArray }: Props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    youMayLikeArray && (
      <Carousel
        swipeable={false}
        draggable={false}
        //showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //keyBoardControl={true}
        //customTransition="all .5"
        //transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        //dotListClass="custom-dot-list-style"
        itemClass="p-1"
      >
        {youMayLikeArray.map((post, index) => {
          return <Post data={post} key={`yml ${index}`} />;
        })}
      </Carousel>
    )
  );
}
