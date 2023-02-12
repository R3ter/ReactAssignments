export default () => {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div>
      <h1>{data.reduce((pre, curr) => (pre += " " + curr))}</h1>
      <h1>{number1 + " + " + number2 + " = " + (number1 + number2)}</h1>
      <h2>The string’s length is: {string.length}</h2>
    </div>
  );
};
