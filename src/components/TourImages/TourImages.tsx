import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

//srcr
import { TourImages as TourPlaceImages } from "../../constants/TourImages";
const TourImages = () => {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <ImageList
      sx={{ width: "100%", height: 360 }}
      variant="quilted"
      cols={4}
      rowHeight={160}
    >
      {TourPlaceImages?.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
          sx={{ display: "flex", alignSelf: "center", margin: "2%" }}
        >
          <img
            {...srcset(item.img, 320, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "12px" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default TourImages;
