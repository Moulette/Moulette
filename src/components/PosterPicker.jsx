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
  // If dragged more than 150px in any direction, fade to 0 in the next 50px
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <PosterImage movie={currentMovies[0]} top={true} />
        <div className="absolute top-0">
          <motion.div
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            style={{ x, opacity }}
          >
            <PosterImage movie={currentMovies[1]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PosterPicker;
