import { useState } from 'react'
import './App.css'
import logo from "./assets/images/logo/logo.svg"
import dots from "./assets/images/extra/dots.svg"
import rectangle from "./assets/images/extra/rectangle.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < header id="header" >
        <div class="logo" ><a href="/"><img src={logo} alt="logo" /></a></div>
        <nav>
          <ul>
            <a href="">
              <li><span>#</span>home</li>
            </a>
            <a href="">
              <li><span>#</span>projects</li>
            </a>
            <a href="">
              <li><span>#</span>about-me</li>
            </a>
            <a href="">
              <li><span>#</span>contacts</li>
            </a>
          </ul>
        </nav>
      </header >
      <main>
        <section class="projects">
          <div class="title">
            <h2><span>#</span>projects</h2>
            <div class="title_line"></div>
            <a href="">View all ~~></a>
          </div>
          <h4>My journey from ZERO - 0</h4>
          <div class="cards_wrapper">
            <div class="card">
              <img src="./assets/images/projects/final_project.png" alt="" />
              <p class="used_languages">HTML CSS</p>
              <div class="web_description">
                <h3>Title</h3>
                <p>Best web ever</p>
                <a href="https://rt-front.github.io/Davaleba-9/">View Page ~></a>
              </div>
            </div>
            <span>~~></span>
            <div class="card">
              <img src="./assets/images/projects/project_2.png" alt="" />
              <p class="used_languages">HTML CSS</p>
              <div class="web_description">
                <h3>Title</h3>
                <p>Best web ever</p>
                <a href="https://rt-front.github.io/Final-Project/">View Page ~></a>
              </div>
            </div>
            <span>~~></span>
            <div class="card">
              <img src="./assets/images/projects/final_project.png" alt="" />
              <p class="used_languages">HTML CSS React JS</p>
              <div class="web_description">
                <h3>Title</h3>
                <p>Best web ever</p>
                <a href="https://rtgamedev.github.io/inovIT/">View Page ~></a>
              </div>
            </div>
          </div>
        </section>
        <section class="skills">
          <div class="title">
            <h2><span>#</span>skills</h2>
            <div class="title_line"></div>
          </div>
          <div class="content_wrapper">
            <div class="skills_decor">
              <div class="decor_1">
                <img src={dots} alt="decor_img" />
                <img src={rectangle} alt="decor_img" />
              </div>
              <div class="decor_2">
                <a href="#header" ><img src={logo} alt="logo_img" /></a>
                <img src={dots} alt="decor_img" />
                <img src={rectangle} alt="decor_img" />
              </div>
            </div>
            <div class="boxes">
              <div class="box_1">
                <h3>Languages</h3>
                <p>JavaScript PHP</p>
                <p>C#</p>
              </div>
              <div class="box_2">
                <h3>Databases</h3>
                <p>Cloud9 MySQL</p>
                <p>SQLite</p>
              </div>
              <div class="box_3">
                <h3>Tools</h3>
                <p>VSCode Figma</p>
                <p>Illustrator Git</p>
                <p>Github</p>
              </div>
              <div class="box_4">
                <h3>Frameworks</h3>
                <p>Angular Laravel</p>
                <p>Bootstrap React</p>
              </div>
              <div class="box_5">
                <h3>Other</h3>
                <p>HTML CSS</p>
                <p>Wordpress</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; All rights reserved. Reshad Tsteskhladze</p>
      </footer>
    </>
  )
}

export default App

// <main>
// <section class="projects">
//   <div class="title">
//     <h2><span>#</span>projects</h2>
//     <div class="title_line"></div>
//     <a href="">View all ~~</a>
//   </div>
//   <h4>My journey from 0 <span>~~</span> junior</h4>
//   <div class="cards_wrapper">
//     <div class="card">
//       {/* <img src="./assets/images/projects/final_project.png" alt="" /> */}
//       <p class="used_languages">HTML CSS</p>
//       <div class="web_description">
//         <h3>Title</h3>
//         <p>Best web ever</p>
//         <a href="https://rt-front.github.io/Final-Project/">View Page ~</a>
//       </div>
//     </div>
//     <span>~~</span>
//     <div class="card">
//       {/* <img src="./assets/images/projects/project_2.png" alt="" /> */}
//       <p class="used_languages">HTML CSS</p>
//       <div class="web_description">
//         <h3>Title</h3>
//         <p>Best web ever</p>
//         <a href="https://rt-front.github.io/Davaleba-9/">View Page ~</a>
//       </div>
//     </div>
//     <span>~~</span>
//     <div class="card">
//       {/* <img src="./assets/images/projects/final_project.png" alt="" /> */}
//       <p class="used_languages">HTML CSS</p>
//       <div class="web_description">
//         <h3>Title</h3>
//         <p>Best web ever</p>
//         <a href="https://rt-front.github.io/Final-Project/">View Page ~</a>
//       </div>
//     </div>
//   </div>
// </section>
// <section class="skills">
//   <div class="title">
//     <h2><span>#</span>skills</h2>
//     <div class="title_line" style="width: 15vw;"></div>
//   </div>
//   <div class="content_wrapper">
//     <div class="skills_decor">
//       <div class="decor_1">
//         <img src={dots} alt="decor_img" style="height: 8vh; align-self: flex-end;" />
//         <img src={rectangle} alt="decor_img" style="align-self: flex-start;" />
//       </div>
//       <div class="decor_2">
//         <a href="#header" style="align-self: flex-end;"><img src={logo} alt="logo_img" style="height: 15vh;" /></a>
//         <img src={dots} alt="decor_img" style="height: 8vh;" />
//         <img src={rectangle} alt="decor_img"
//           style="height: 8vh; align-self: flex-end;" />
//       </div>
//     </div>
//     <div class="boxes">
//       <div class="box_1">
//         <h3>Languages</h3>
//         <p>JavaScript PHP</p>
//         <p>C#</p>
//       </div>
//       <div class="box_2">
//         <h3>Databases</h3>
//         <p>Cloud9 MySQL</p>
//         <p>SQLite</p>
//       </div>
//       <div class="box_3">
//         <h3>Tools</h3>
//         <p>VSCode Figma</p>
//         <p>Illustrator Git</p>
//         <p>Github</p>
//       </div>
//       <div class="box_4">
//         <h3>Frameworks</h3>
//         <p>Angular Laravel</p>
//         <p>Bootstrap React</p>
//       </div>
//       <div class="box_5">
//         <h3>Other</h3>
//         <p>HTML CSS</p>
//         <p>Wordpress</p>
//       </div>
//     </div>
//   </div>
// </section>
//         <section class="about">
//           <div class="title">
//             <h2><span>#</span>about-me</h2>
//             <div class="title_line" style="width: 20vw;"></div>
//           </div>
//           <div class="content_wrapper">
//             <div class="about_content">
//               <p>Hello, i'm Reshad!</p>
//               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolore nisi similique
//                 praesentium qui, enim nesciunt architecto reprehenderit sit officiis ullam voluptate
//                 quibusdam impedit minima vel amet, consequuntur doloribus aliquam.</p>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deserunt, earum
//                 necessitatibus voluptates molestias dolorum fuga voluptas ullam sequi, cupiditate voluptate
//                 iusto debitis beatae at perspiciatis, quae nemo atque ipsum!</p>
//             </div>
//             <img src={rectangle} alt="img" />
//           </div>
//         </section>
//       </main >