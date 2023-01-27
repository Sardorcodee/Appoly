import "./index.scss";
function Features(){
       return (
         <section id="Features">
           <div className="container text-center">
             <h2>App features</h2>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
               nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
               Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
               Ullamcorper risus tempor, ac nunc libero urna, feugiat.
             </p>
             <div className="row align-items-center justify-content-between mt-5">
               <div className="col-12 col-md-4 text-center text-md-end d-flex flex-column gap-5 justify-content-between">
                 <div className="d-flex flex-column">
                   <span>
                     <i class="fa-solid fa-server"></i>
                   </span>
                   <h2>unlimiter features</h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
                 <div className="d-flex flex-column">
                   <span>
                     <i class="fa-solid fa-pen-nib"></i>
                   </span>
                   <h2>awsome ui design</h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
               </div>
               <div className="col-12 col-md-4 d-flex flex-column justify-content-center gap-5">
                 <div className="d-flex flex-column">
                   <span>
                     <i class="fa-solid fa-message"></i>
                   </span>
                   <h2>Full free chat</h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
                 <img src="/public/img/App.png" alt="Png" />
                 <div className="d-flex flex-column">
                   <span>
                     <i class="fa-solid fa-headset"></i>
                   </span>
                   <h2>24/7 support by real pepole</h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
               </div>
               <div className="col-12 col-md-4 text-center text-md-start d-flex flex-column gap-5 justify-content-between">
                 <div className="d-flex flex-column">
                   <span>
                     <i class="fa-solid fa-mobile"></i>
                   </span>
                   <h2>iso & androind version</h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
                 <div className="d-flex flex-column">
                   <span>
                     <i class="fa-solid fa-eye-low-vision"></i>
                   </span>
                   <h2>retina ready greaphics</h2>
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>
       );
}
export default Features