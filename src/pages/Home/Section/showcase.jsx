import './index.scss'
function Showcase(){
    return (
      <section id="showcase">
        <div className="container m-auto row align-items-center gap-0 gap-md-5 justify-md-content-center">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="card-show">
              <h1>A Great App Makes Your Life Better</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h2>Download App Now</h2>
              <div className="d-flex gap-2">
                <img className="imgapk" src="/public/img/APK.png" alt="APK" />
                <img className="imgapk" src="/public/img/IOSStore.png" alt="IOS" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-4">
            <img className="showimg" src="/public/img/showphone.png" alt="Phone" />
          </div>
        </div>
      </section>
    );
}
export default Showcase