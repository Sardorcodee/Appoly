import  './index.scss'
function Footer(){
   return (
     <footer>
       <div className="container m-auto row justify-content-lg-between gap-4 gap-md-none">
         <div className="col-md-3 col-12 d-flex flex-column gap-2">
           <h2>Logo</h2>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
             nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
           </p>
           <div className="d-flex justify-content-start gap-2 gap-lg-3">
             <a href="#">
               <i className="fa-brands fa-facebook-f"></i>
             </a>
             |
             <a href="#">
               <i className="fa-brands fa-instagram"></i>
             </a>
             |
             <a href="#">
               <i className="fa-brands fa-twitter"></i>
             </a>
             |
             <a href="#">
               <i className="fa-brands fa-youtube"></i>
             </a>
           </div>
         </div>
         <div className="col-md-3 col-12 d-flex flex-column gap-2">
           <h2>quick link</h2>
           <a href="" className="nav-link">
             About
           </a>
           <a href="" className="nav-link">
             Features
           </a>
           <a href="" className="nav-link">
             Screenshot
           </a>
           <a href="" className="nav-link">
             Blog
           </a>
         </div>
         <div className="col-md-3 col-12 d-flex flex-column gap-2">
           <h2>news letter</h2>
           <p>Subscribe our newsletter to get our latest update & news</p>
           <form className="position-relative">
             <input type="email" placeholder="Your email address" />
             <button type="submit">
               <i class="fa-solid fa-paper-plane"></i>
             </button>
           </form>
         </div>
       </div>
       <div className="container">
         <hr className="bg-dark" />
         <p className="text-center">
           &copy; Copyright 2021 .Ojjomedia. All Right Reserved.
         </p>
       </div>
     </footer>
   );
}
export default Footer