import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src:
      "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "Grab the offer",
    caption: "Offer 1",
    key: 1,
  },
  {
    src:
      "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "BOGO",
    caption: "Offer 2",
    key: 2,
  },
  {
    src:
      "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "Flash sale",
    caption: "Offer 3",
    key: 3,
  },
];

function ImageSlider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default ImageSlider;
