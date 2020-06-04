import React from 'react';
import PortfolioTimeline from './PortfolioTimeline';
import './Portfolio.css';
import data from './data.json';

const Portfolio = () => {
  return (
    <div className="board">
      <div className="board-title">
        <h1>portfolio</h1>
      </div>
      <div className="board-description">
        <p>See my works below. For any questions, please <a href="/contact-me">contact me</a> and I'll be happy to respond in a timely manner.</p>
      </div>
      <div className="portfolio-timeline">
        <ul>
          {
            data.map((curr, idx) => (
              <PortfolioTimeline key={ idx } data={ curr } />
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default Portfolio;

// <div class="site-main board">
//   <div class="board-description">
//     <p>See my works below. For any questions, please <a href="/contact-me">contact me</a> and I'll be happy to respond in a timely manner.</p>
//   </div>

//   <div class="portfolio-timeline">
//     <ul>
//       <% for (let i = 0; i < portfolioData.length; i++) { %>
//         <% const project = portfolioData[i] %>
//         <% const className = `project-contents ${i === 0 ? 'no-border' : ''}` %>
//         <li class="timeline-element">
//           <div class="timeline-date">
//             <div><%= project.date %></div>
//           </div>
//           <div class="<%= className %>">
//             <div class="project-details">
//               <div class="project-title">
//                 <a target="_blank" href="<%= project.url %>"><%= project.name %></a>
//               </div>
//               <div class="project-text">
//                 <%- project.description_html %>
//               </div>
//               <div class="project-overview">
//                 <ul>
//                   <% for (let q = 0; q < project.overview.length; q++) { %>
//                     <li><%= project.overview[q] %></li>
//                   <% } %>
//                 </ul>
//               </div>
//               <div class="project-technologies">
//                 <h3>technologies</h3>
//                 <ul>
//                   <% for (let x = 0; x < project.tech.length; x++) { %>
//                     <% const tech = project.tech[x] %>
//                     <li>
//                       <a target="_blank" href="<%= tech.url %>">
//                         <basic-chip><%= tech.name %></basic-chip>  
//                       </a>
//                     </li>
//                   <% } %>
//                 </ul>
//               </div>
//             </div>
//             <div class="project-gallery">
//               <% for (let z = 0; z < project.images.length; z++) { %>
//                 <div class="project-image-container">
//                   <img class="project-image" src="<%= project.images[z] %>" />
//                 </div>
//               <% } %>
//             </div>
//           </div>
//         </li>
//       <% } %>
//     </ul>
//   </div>
// </div>