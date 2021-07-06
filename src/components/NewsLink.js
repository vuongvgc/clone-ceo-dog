import PropTypes from "prop-types";
function NewsLink(props) {
  return (
    <a className="nav-link" href={props.link} alt="props.description">
      {props.description}
    </a>
  );
}
export default NewsLink;

NewsLink.propTypes = {
  link: PropTypes.string,
  description: PropTypes.string,
};
