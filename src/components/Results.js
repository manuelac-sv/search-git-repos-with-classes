import React from 'react';
import '../style.css';

const Results = ({ repos }) => {

 return (
       <div className="container">
           { repos.data && repos.data.length !==0 ? (
               <>
                 <h2>Repos found for user "{repos.data[0].owner.login}"</h2>
                 <ul>
                   {repos.data.map((item) => (
                     <li key={item.id}>
                       <a href={item.html_url}>{item.name}</a>
                       <span className="stars">Stars: {item.stargazers_count}</span>
                     </li>
                   ))}
                 </ul>
               </>
             ) : (
               <h2>No repos found</h2>
             )
           }
       </div>
   )
}

export default Results;