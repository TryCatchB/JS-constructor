import image from "./assets/image.png";
import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript.", {
    tag: "h2",
    styles: {
      "text-align": "center",
      color: "#fff",
      padding: "1.5rem",
      background: "linear-gradient(to right, #ff0099, #493240)",
    },
  }),

  new TextBlock("Вперед в веб-разработку вместе!", {
    styles: {
      "font-size": "1.25rem",
      "text-align": "center",
      color: "#FFFFFFCC",
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "0.625rem 0",
    },
  }),

  new ColumnsBlock(["HTML", "CSS", "JS"], {
    styles: {
      "font-size": "1.125rem",
      "font-weight": "600",
      "text-align": "center",
      color: "#fff",
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
    },
  }),

  new ImageBlock(image, {
    styles: {
      display: "flex",
      "justify-content": "center",
      padding: "0.9375rem 0",
    },
    imageStyles: {
      width: "31.25rem",
      height: "auto",
    },
    alt: "Это картина",
  }),
];
