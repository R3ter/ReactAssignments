import { useRef } from "react";

export default () => {
  const video = useRef(null);
  return (
    <div>
      <video ref={video} width="320" height="240" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <br></br>
      <button
        onClick={() => {
          video.current.play();
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          video.current.pause();
        }}
      >
        pause
      </button>
    </div>
  );
};
