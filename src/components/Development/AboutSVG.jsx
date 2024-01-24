import { useEffect } from "react";

export const AboutSVG = ({ fillColor, height }) => {
  const viewBoxWidth = window.innerWidth;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={height}
      viewBox="0 0 ${viewBoxWidth} 1990"
      // viewBox="0 0 330 1990"
      fill={fillColor}
      id="about-svg"
    >
      <path
        d={`M${viewBoxWidth} 20.1904C${viewBoxWidth} 20.1904 ${
          viewBoxWidth / 2
        } -30.2634 0 28.3428V1972.97C0 1972.97 ${viewBoxWidth / 4} 1992.49 ${
          viewBoxWidth / 2
        } 1989.73C${
          (3 * viewBoxWidth) / 4
        } 1987.77 ${viewBoxWidth} 1972.97 ${viewBoxWidth} 1972.97V20.1904Z`}
        fill={fillColor}
      />
      {/* <path
      d="M330 20.1904C330 20.1904 152 -30.2634 0 28.3428V1972.97C0 1972.97 116.748 1992.49 195.5 1989.73C251.811 1987.77 330 1972.97 330 1972.97V20.1904Z"
      fill={fillColor}
    /> */}
    </svg>
  );
};
