import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useState, useEffect } from "react";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animationDuration = 1500; // Duration of animation in milliseconds
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progressIncrement =
        (progress - animationProgress) * (elapsedTime / animationDuration);
      const nextProgress = animationProgress + progressIncrement;

      if (nextProgress < progress) {
        setAnimationProgress(nextProgress);
        requestAnimationFrame(animate);
      } else {
        setAnimationProgress(progress);
      }
    };

    animate();

    return () => {
      setAnimationProgress(progress);
    };
  }, [progress]);

  const angle = animationProgress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient( ${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(${colors.greenAccent[500]} 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg)`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
      }}
    />
  );
};

export default ProgressCircle;

// Set initial progress to 0, then update to the real progress after a delay
// useEffect(() => {
//   const timeout = setTimeout(() => {
//     setInitialProgress(progress);
//   }, 500); // Adjust delay as needed

//   return () => clearTimeout(timeout);
// }, [progress]);

// return (
//   <Box
//     sx={{
//       background: `conic-gradient(transparent ${initialProgress * 360}deg, #00FF00 ${initialProgress * 360}deg ${progress * 360}deg, transparent ${progress * 360}deg 360deg)`,
//       transition: "background 1s ease" // Transition for smooth animation
//     }}
//   />
// );
// };

//background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
// conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
// ${colors.greenAccent[500]}`,
