import IconSocial from "../components/IconSocial";
function Footer() {
  return (
    <footer className="footer__box">
      <div className="social__box">
        <IconSocial iconName="fab fa-linkedin-in" />
        <IconSocial iconName="fab fa-twitter" />
      </div>
      <div className="footer__text">
        <p>Need business advice?</p>
        <p>Ask me a question dog@dog.ceo</p>
      </div>
    </footer>
  );
}
export default Footer;
