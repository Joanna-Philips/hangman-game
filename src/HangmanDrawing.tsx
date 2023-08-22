const HEAD = (
    <div 
    style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "8px solid teal",
        position: "absolute",
        top: "45px",
        right: "-28px"
    }}/>
)

const BODY = (
    <div 
    style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "8px solid teal",
        position: "absolute",
        top: "45px",
        right: "-28px"
    }}/>
)


export const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
        {HEAD}
      <div
        style={{
          height: "50px",
          width: "8px",
          background: "teal",
          position: "absolute",
          top: "0",
          right: "0"
        }}
      />

      <div
        style={{
          height: "8px",
          width: "180px",
          background: "teal",
          marginLeft: "96px",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "8px",
          background: "teal",
          marginLeft: "96px",
        }}
      />
      <div style={{ height: "8px", width: "200px", background: "teal" }} />
    </div>
  );
};
