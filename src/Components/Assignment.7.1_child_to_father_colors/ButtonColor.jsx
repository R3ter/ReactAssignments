export default ({ color_, onclick_ }) => {
  return (
    <div style={{ margin: 20 }}>
      <button
        onClick={() => onclick_(color_)}
        style={{ backgroundColor: color_ }}
      >
        {color_}
      </button>
    </div>
  );
};
