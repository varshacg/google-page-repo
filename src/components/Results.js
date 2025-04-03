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
            title: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
            link: "https://www.example.com/inception"
          },
          {
            title: "The Matrix",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            link: "https://www.example.com/the-matrix"
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