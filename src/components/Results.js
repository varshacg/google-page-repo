import React from 'react';
import { useState,useEffect } from 'react';
import {useLocation} from 'react-router-dom';


const Results=() => {
    const location =useLocation();
    console.log(location);
    const query = new URLSearchParams(location.search).get('q');
    const[results,setResults]=useState([]);
    console.log(query);
    
    
    /* useEffect(()=>{
        if(query){
            fetchResults(query);
        }
    },[query]); */


    /* const fetchResults=async (searchTerm)=>{
        try{
            const response=await fetch(`https://api.duckduckgo.com/?q=Google&format=json`);
            const data=await response.json();
            setResults(data.results || []);
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    }; */

    const data =[
        {
          "title": "Inception",
          "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
          "link": "https://www.example.com/inception"
        },
        {
          "title": "The Matrix",
          "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
          "link": "https://www.example.com/the-matrix"
        },
        {
          "title": "Interstellar",
          "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          "link": "https://www.example.com/interstellar"
        },
        {
          "title": "The Dark Knight",
          "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
          "link": "https://www.example.com/the-dark-knight"
        },
        {
          "title": "Fight Club",
          "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
          "link": "https://www.example.com/fight-club"
        },
        {
          "title": "Pulp Fiction",
          "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          "link": "https://www.example.com/pulp-fiction"
        },
        {
          "title": "Forrest Gump",
          "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
          "link": "https://www.example.com/forrest-gump"
        },
        {
          "title": "The Shawshank Redemption",
          "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "link": "https://www.example.com/the-shawshank-redemption"
        },
        {
          "title": "The Godfather",
          "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          "link": "https://www.example.com/the-godfather"
        },
        {
          "title": "The Lord of the Rings: The Fellowship of the Ring",
          "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          "link": "https://www.example.com/the-lord-of-the-rings"
        },
        {
          "title": "Star Wars: Episode IV - A New Hope",
          "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
          "link": "https://www.example.com/star-wars"
        },
        {
          "title": "The Silence of the Lambs",
          "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          "link": "https://www.example.com/the-silence-of-the-lambs"
        },
        {
          "title": "Schindler's List",
          "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          "link": "https://www.example.com/schindlers-list"
        },
        {
          "title": "The Green Mile",
          "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
          "link": "https://www.example.com/the-green-mile"
        },
        {
          "title": "Gladiator",
          "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
          "link": "https://www.example.com/gladiator"
        },
        {
          "title": "Braveheart",
          "description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
          "link": "https://www.example.com/braveheart"
        },
        {
          "title": "Titanic",
          "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
          "link": "https://www.example.com/titanic"
        },
        {
          "title": "Avatar",
          "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          "link": "https://www.example.com/avatar"
        },
        {
          "title": "Jurassic Park",
          "description": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
          "link": "https://www.example.com/jurassic-park"
        },
        {
          "title": "The Lion King",
          "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
          "link": "https://www.example.com/the-lion-king"
        },
        {
          "title": "Back to the Future",
          "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
          "link": "https://www.example.com/back-to-the-future"
        },
        {
          "title": "The Terminator",
          "description": "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
          "link": "https://www.example.com/the-terminator"
        },
        {
          "title": "Alien",
          "description": "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
          "link": "https://www.example.com/alien"
        },
        {
          "title": "Blade Runner",
          "description": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
          "link": "https://www.example.com/blade-runner"
        },
        {
          "title": "The Shining",
          "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
          "link": "https://www.example.com/the-shining"
        },
        {
          "title": "Goodfellas",
          "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
          "link": "https://www.example.com/goodfellas"
        },
        {
          "title": "The Departed",
          "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
          "link": "https://www.example.com/the-departed"
        },
        {
          "title": "Se7en",
          "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
          "link": "https://www.example.com/se7en"
        },
        {
          "title": "The Usual Suspects",
          "description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
          "link": "https://www.example.com/the-usual-suspects"
        },
        {
          "title": "Saving Private Ryan",
          "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
          "link": "https://www.example.com/saving-private-ryan"
        }
      ];
    useEffect(()=>{
        //console.log("data:",data);
        if(query){
            
                let matchedResults=[];
                for(let i=0;i<data.length;i++){
                    const title=data[i].title?.toLowerCase() || "";
                    const description=data[i].description?.toLowerCase() || "";
                    if(title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())){
                      matchedResults.push(data[i]);
                    }
                }
                setResults(matchedResults);
                
            }
        
    },[query]);

   
    return(
        <div className="search-results">
            
             {results.length===0?(
              <p>No results Found</p>
              ):(
                results.map((result,index) => (
                <div key={index} className="result">
                    <a href={result.link} target="_blank" rel="noopener noreferrer">
                        <p className='result-url'>{result.link}</p>
                        <h3 className='result-title'>{result.title}</h3>
                        
                    </a>
                    <p className='result-description'>{result.description}</p>
                </div>
            ))
           )}
        </div>
    );
    
}
export default Results;