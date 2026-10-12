function Cards(props) {
  return (
    <>
      <div
        style={{ backgroundColor:props.bgcolor }}
        className="rounded-xs p-5 grow"
      >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
}
export default Cards;
