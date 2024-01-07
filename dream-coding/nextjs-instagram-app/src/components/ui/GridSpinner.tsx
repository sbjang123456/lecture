import dynamic from 'next/dynamic';
const GridLoader = dynamic(() => import('react-spinners/GridLoader'), {
  ssr: false,
});

type Props = {
  color?: string;
};

export default function GridSpinner({ color = 'red' }: Props) {
  return <GridLoader color={color} />;
}
