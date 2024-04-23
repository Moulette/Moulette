import PosterImage from "./PosterImage";
import { motion, useMotionValue, useTransform } from "framer-motion";

/**
 * Component that displays the topmost two PosterImages, and contains the logic for swiping/animating moving the images on the page.
 * @returns
 */
const PosterPicker = ({
  currentMovies,
  handleDontWatch,
  handleWatched,
  handleAddWatchList,
}) => {
  const x = useMotionValue(0);
  // If dragged more 100 px in either direction, start to fade until 175px
  const opacity = useTransform(x, [-175, -100, 0, 100, 175], [0, 1, 1, 1, 0]);
  // As you drag, allow the card to rotate either direction
  const rotate = useTransform(x, [-300, 300], [-50, 50]);
  const translateY = useTransform(x, [-300, 0,  300], [-100, 0, -100]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <PosterImage movie={currentMovies[0]} top={true} />
        <div className="absolute top-0">
          <motion.div
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            style={{ x, opacity, rotate, translateY }}
          >
            <PosterImage movie={currentMovies[1]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PosterPicker;
