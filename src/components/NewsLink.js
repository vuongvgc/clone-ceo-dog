function NewsLink(props) {
  return (
    <a className="nav-link" href={props.link} alt="props.description">
      {props.description}
    </a>
  );
}
export default NewsLink;
