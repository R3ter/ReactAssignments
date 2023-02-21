import { useState, useEffect } from "react";
import "./style.css";
export default () => {
  const [ava, setAvatars] = useState([]);
  useEffect(() => {
    const avatars = [...Array(10)].map(async () => {
      const a = await fetch("https://randomuser.me/api/").then((e) => e.json());
      return {
        name: a.results[0].name.first,
        image: a.results[0].picture.thumbnail,
      };
    });
    Promise.all(avatars).then((e) => {
      setAvatars(e);
    });
  }, []);
  return (
    <div style={{ backgroundColor: "gray", display: "flex", width: "100%" }}>
      {ava.map(({ name, image }) => (
        <div>
          <p>{name}</p>
          <img src={image} alt="Avatar" className="avatar" />
        </div>
      ))}
    </div>
  );
};
