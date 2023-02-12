export default () => {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "90%",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "90%",
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "40%",
                backgroundColor: "gray",
                margin: "auto",
              }}
            ></div>
            <div
              style={{
                width: "90%",
                height: "40%",
                backgroundColor: "gray",
                margin: "auto",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
