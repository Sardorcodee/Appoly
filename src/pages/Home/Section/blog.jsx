import "./index.scss";
function Blog() {
  return (
    <section id="Blog">
      <div className="container text-center">
        <h2>Our recent blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="row justify-content-center justify-content-md-between align-items-center">
          <div className="col-12 col-md-3 card-blog">
            <img src="/public/img/image.png" alt="Img" />
            <h2>The Snap Pixel: How It Works and How to Install</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="col-12 col-md-3 card-blog">
            <img src="/public/img/image (1).png" alt="Img" />
            <h2>Global Partner Solutions: A Partnership of Innovation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="col-12 col-md-3 card-blog">
            <img src="/public/img/image (2).png" alt="Img" />
            <h2>2021: An opportunity for Snapchatters to start fresh</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div className="container position-relative d-none d-md-block">
        <div className="card-con">
          <div className="row justify-content-center  gap-4 align-items-center">
            <div className="col-10 col-md-5 row align-items-center justify-content-center">
              <div className="col-4 col-md-3 text-center">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="col-8 col-md-8">
                <p>sindarovsardor9@gmail.com</p>
              </div>
            </div>
            <div className="col-10 col-md-5 row align-items-center">
              <div className="col-4 col-md-3 text-center">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="col-7 col-md-8 text-center">
                <p>+998 (93) 6060509</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
