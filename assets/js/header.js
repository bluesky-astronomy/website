let appHeader = `
<header id="main_menu" class="header navbar-fixed-top">
<div class="main_menu_bg">
  <div class="container">
    <div class="row">
      <div class="nave_menu">
        <nav class="navbar navbar-default" id="navmenu">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">
                <p style="font-family: 'Montserrat', sans-serif; font-weight: 900;">Astronomy on Bluesky.</p>
              </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->

            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav navbar-right">
                <li><a href="index.html">home</a></li>
                <li><a href="https://bsky.app/profile/did:plc:jcoy7v3a2t4rcfdh6i4kza25/feed/astro">feed</a></li>
                <li><a href="https://signup.astronomy.blue">sign up</a></li>
                <li><a href="about.html">about</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
</header>
`;
document.getElementById("app-header").innerHTML = appHeader;


// ORIGINAL HEADER:
// let appHeader = `
// <header id="main_menu" class="header navbar-fixed-top">
// <div class="main_menu_bg">
//   <div class="container">
//     <div class="row">
//       <div class="nave_menu">
//         <nav class="navbar navbar-default" id="navmenu">
//           <div class="container-fluid">
//             <!-- Brand and toggle get grouped for better mobile display -->
//             <div class="navbar-header">
//               <button
//                 type="button"
//                 class="navbar-toggle collapsed"
//                 data-toggle="collapse"
//                 data-target="#bs-example-navbar-collapse-1"
//                 aria-expanded="false"
//               >
//                 <span class="sr-only">Toggle navigation</span>
//                 <span class="icon-bar"></span>
//                 <span class="icon-bar"></span>
//                 <span class="icon-bar"></span>
//               </button>
//               <a class="navbar-brand" href="index.html">
//                 <img src="assets/images/logo.png" />
//               </a>
//             </div>

//             <!-- Collect the nav links, forms, and other content for toggling -->

//             <div
//               class="collapse navbar-collapse"
//               id="bs-example-navbar-collapse-1"
//             >
//               <ul class="nav navbar-nav navbar-right">
//                 <li><a href="about.html">about</a></li>
//                 <li class="dropdown">
//                   <a
//                     href="#"
//                     class="dropdown-toggle"
//                     data-toggle="dropdown"
//                     role="button"
//                     aria-haspopup="true"
//                     >services</a
//                   >
//                   <ul class="dropdown-menu">
//                     <li><a href="service.html">service page</a></li>
//                     <li><a href="service1.html">service page two</a></li>
//                   </ul>
//                 </li>
//                 <li class="dropdown">
//                   <a
//                     href="#"
//                     class="dropdown-toggle"
//                     data-toggle="dropdown"
//                     role="button"
//                     aria-haspopup="true"
//                     >works</a
//                   >
//                   <ul class="dropdown-menu">
//                     <li><a href="work.html">work page</a></li>
//                     <li><a href="work1.html">work page Two</a></li>
//                   </ul>
//                 </li>
//                 <li class="dropdown">
//                   <a
//                     href="#"
//                     class="dropdown-toggle"
//                     data-toggle="dropdown"
//                     role="button"
//                     aria-haspopup="true"
//                     >blog</a
//                   >
//                   <ul class="dropdown-menu">
//                     <li><a href="blog.html">blog page</a></li>
//                     <li><a href="bloginner.html">singleblog page</a></li>
//                   </ul>
//                 </li>
//                 <li><a href="contact.html">contact</a></li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   </div>
// </div>
// </header>
// `;
// document.getElementById("app-header").innerHTML = appHeader;
