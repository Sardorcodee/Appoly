import "./index.scss";
function About() {
  return (
    <section id="About">
      <div className="container text-center">
        <h2>About Our App</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="row mt-3 justify-content-between mt-5">
          <div className="col-8 col-md-5">
            <img className="imgAbout" src="/public/img/android-smart.png" alt="Smart png" />
          </div>
          <div className="col-12 col-md-5 row gap-3 justify-content-center">
            <div className="card-about col-12">
              <div className="d-flex">
                <img
                  className="Galochka"
                  src="/public/img/galocha.png"
                  alt="Galochka"
                />
                <h2>Creative design</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
            <div className="card-about col-12">
              <div className="d-flex">
                <img
                  className="Galochka"
                  src="/public/img/galocha.png"
                  alt="Galochka"
                />
                <h2>easy to use</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
            <div className="card-about col-12">
              <div className="d-flex">
                <img
                  className="Galochka"
                  src="/public/img/galocha.png"
                  alt="Galochka"
                />
                <h2>Best user experince</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
