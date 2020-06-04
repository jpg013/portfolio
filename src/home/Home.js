import React from 'react'

const Home = () => {
  return (
    <div>
      Hello world
    </div>
  )
}

export default Home;


// <!-- views/home.ejs -->

// <%- include('../views/header') -%>
// <%- include('../views/sidebar') -%>

// <div class="site-main">
//   <div class="home-greeting">
//     <div class="home-greeting-title">
//       <h1>
//         <typing-effect></typing-effect>
//       </h1>
//     </div>
//     <div class="home-greeting-message"></div>
//       <div class="home-buttons" id="home-buttons">
//     </div>
//   </div>
// </div>

// <script type="text/javascript">
//   const homeBtnsEl = document.getElementById('home-buttons')
  
//   const renderHomeBtn = (root, { name, href }, idx) => {
//     const btn = document.createElement('a')
    
//     btn.innerHTML = name
//     btn.setAttribute('href', href)
//     btn.classList.add('fade-in')
    
//     const delay = (idx * 330) + 1400 // delay in ms

//     setTimeout(() => {
//       root.appendChild(btn)
//     }, delay)
//   }

//   const btns = [
//     {
//       name: 'portfolio',
//       href: '/portfolio'
//     },
//     {
//       name: 'my offer',
//       href: '/skills-and-offer'
//     },
//     {
//       name: 'resume',
//       href: '/cv'
//     },
//   ]
  
//   for (let i = 0; i < btns.length; i++) {
//     renderHomeBtn(homeBtnsEl, btns[i], i);
//   }

//   typingEffect = document.querySelector('typing-effect')
//   typingEffect.timings = [
//     {
//       text: "Hi, ",
//       throttleInMs: 40,
//       delayInMs: 230
//     },
//     {
//       text: "I'm Justin,",
//       throttleInMs: 40,
//       delayInMs: 750 
//     },
//   ]

//   setTimeout(() => {
//     const h2El = document.createElement('h2')

//     h2El.classList.add('fade-in-short')
//     h2El.innerHTML = 'a full-stack software engineer based out of the Kansas City area.'
//     document.getElementsByClassName('home-greeting-message')[0].appendChild(h2El)
//   }, 1200)
// </script>

// <%- include('../views/footer') -%>