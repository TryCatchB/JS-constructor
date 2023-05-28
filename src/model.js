import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JS.", {
    tag: "h2",
    styles: {
      "text-align": "center",
      color: "#fff",
      background: "linear-gradient(to right, #ff0099, #493240)",
      padding: "1.5rem",
    },
  }),

  new TextBlock("Давайте двигаться вперед к веб-разработке вместе!", {
    styles: {
      "font-size": "1.5625rem",
      "text-align": "center",
      color: "#fff",
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1.5rem",
    },
  }),

  new ColumnsBlock(["HTML", "CSS", "JS"], {
    styles: {
      "font-size": "1.125rem",
      "text-align": "center",
      color: "#fff",
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
    },
  }),

  new ImageBlock(image, {
    styles: {
      display: "flex",
      "justify-content": "center",
      padding: "2rem 0",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Picture",
  }),
];
