import { Box } from 'theme/base'

const YoutubeVideo = ({ id = '' }: { id?: string }) => {
  // const boxRef = useRef<HTMLDivElement>(null);
  // const [width, setWidth] = useState<number>();
  // useEffect(() => {
  //   const resize = () => {
  //     if (boxRef.current) {
  //       setWidth(boxRef.current.clientWidth);
  //     }
  //   };
  //   resize();
  //   window.addEventListener("resize", resize);
  //   return () => {
  //     window.removeEventListener("resize", resize);
  //   };
  // }, []);
  return (
    <Box width="100%" height="100%">
      <iframe
        // width={width}
        // height={0.5625 * width}
        width="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title="Bonbon"
        allowFullScreen
        allow="autoplay"
        style={{ aspectRatio: '1 / 0.5625' }}
      ></iframe>
    </Box>
  )
}

export default YoutubeVideo
