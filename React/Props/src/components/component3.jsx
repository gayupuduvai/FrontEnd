const style = {
  color: "red",
  fontSize: "25px",
};


export default function Component3({data}) {
    return <main>
      <h1>Component3 rendering</h1>
      <p style={style}>{data}</p>
    </main>
  }