import NewsLink from "../components/NewsLink";
function Information() {
  return (
    <section className="information__box">
      <div className="newspaper__box">
        <h2 className="newspaper__header">LATEST:</h2>
        <div className="link__box">
          <NewsLink
            link="https://dog.ceo/10-breeds"
            description="10 Super Adorable Dog Breeds"
          />
        </div>
        <div className="link__box">
          <NewsLink
            link="https://dog.ceo/top-ten-tips-for-business"
            description="Read my Top Ten Tips for How to Succeed in Business"
          />
        </div>
        <div className="link__box">
          <NewsLink
            link="https://dog.ceo/maths-problems-birch-swinnerton-dyer"
            description="Ask Dog CEO - Solving maths problems (and the Birch and Swinnerton-Dyer conjecture)"
          />
        </div>
        <div className="link__box">
          <NewsLink
            link="https://dog.ceo/when-to-roll-over"
            description="Ask Dog CEO: When to roll over in business?"
          />
        </div>
      </div>
      <div className="dog-api">
        <div className="dog-api__box">
          <h2 className="dog-api__header">Dog API</h2>
          <NewsLink
            link="https://dog.ceo/dog-api"
            description="DaaS (Dogs-as-a-Service): the internet's biggest collection of open
            source dog pictures"
          />
          <p className="dog-icon__box">
            <i class="fa fa-dog"></i>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Information;
