import { useState, useEffect } from "react";
import "./style.css";
export default () => {
  const [ava, setAvatars] = useState([]);
  const [searched, setSearched] = useState(ava);
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
      setSearched(e);
    });
  }, []);
  return (
    <div>
      search:{" "}
      <input
        type="text"
        onChange={(e) => {
          console.log(ava);
          setSearched(ava.filter(({ name }) => name.includes(e.target.value)));
        }}
      />
      <div style={{ backgroundColor: "gray", display: "flex", width: "100%" }}>
        {searched.map(({ name, image }) => (
          <div style={{ backgroundColor: "purple" }}>
            <p>{name}</p>
            <img src={image} alt="Avatar" className="avatar" />
          </div>
        ))}
      </div>
    </div>
  );
};
