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
        width: "8px",
        height: "100px",
        background: "teal",
        position: "absolute",
        top: "110px",
        right: 0
    }}/>
)

const RIGHT_ARM = (
    <div 
    style={{
        width: "100px",
        height: "8px",
        background: "teal",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}/>
)

const LEFT_ARM = (
    <div 
    style={{
        width: "100px",
        height: "8px",
        background: "teal",
        position: "absolute",
        top: "150px",
        right: "8px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}/>
)


export const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
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
