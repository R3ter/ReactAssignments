import HoveredImage from "./HoveredImage";
import "./style.css";
export default () => {
  return (
    <div>
      <HoveredImage
        src={
          "https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg"
        }
      />
      <HoveredImage src={"https://www.w3schools.com/html/img_chania.jpg"} />
    </div>
  );
};
