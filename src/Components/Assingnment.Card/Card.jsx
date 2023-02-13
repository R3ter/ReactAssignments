import style from "./Card.module.css";
export default ({ name, image }) => {
  console.log(style);
  console.log(image);
  return (
    <div className={style.card}>
      <img src={image} alt="Avatar" style={{ width: "100%" }} />
      <div className={style.container}>
        <h4>
          <b>{name}</b>
        </h4>
      </div>
    </div>
  );
};
