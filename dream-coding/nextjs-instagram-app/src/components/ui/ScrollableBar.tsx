import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

type Props = {
  children: React.ReactNode;
};
export default function ScrollableBar({ children }: Props) {
  return (
    <Carousel responsive={responsive} containerClass="w-full flex">
      {children}
    </Carousel>
  );
}
