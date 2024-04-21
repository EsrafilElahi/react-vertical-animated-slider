# react-vertical-animated-slider

<p>
React Vertical Animated Slider is a versatile and user-friendly ReactJS component designed to enhance the visual appeal and functionality of your web applications. With seamless integration and effortless customization, this slider empowers developers to create stunning vertical sliders with smooth animations.
</p>

#### click here to see : <a href="https://react-animated-slider-live-demo.vercel.app/">live demo</a>

<hr/>

#### install :

```
npm i react-vertical-animated-slider
```

#### how to use :

```
  import VerticalAnimatedCarousel from "react-vertical-animated-slider";

  <VerticalAnimatedCarousel data={someData} CardItem={YourCardItemComponent} />
```

#### props :

    data: unknown; ---> array of data
    CardItem: React.ComponentType<{ card: unknown }>; ---> CardItem Component

    containerClassName?: string; ---> className with string
    containerStyle?: React.CSSProperties; style with CSSProperties like this : {{ height: '10rem' }}

    carouselClassName?: string; ---> className with string
    carouselStyle?: React.CSSProperties; ---> style with CSSProperties like this : {{ height: '10rem' }}

    cardItemClassName?: string; ---> className with string
    cardItemStyle?: React.CSSProperties; ---> style with CSSProperties like this : {{ height: '10rem' }}

    behindCardSpace?: number; ---> space of card behind main card, default is 1.4
    maxBehindCardVisibility?: number; ---> max number of card visiblity of cards, default is 2
    startFromRight?: boolean; ---> startFromRight or left, default is right { startFromRight: true }

#### how to customize it :

```
  <VerticalAnimatedCarousel data={someData} CardItem={YourCardItemComponent} containerStyle={{ height: '10rem', marginTop: '2rem' }} carouselStyle={{ height: '10rem' }} cardItemStyle={{ height: '10rem' }} />
```

#### npm package link

<a href="https://www.npmjs.com/package/react-vertical-animated-slider">go-to npm package link</a>
