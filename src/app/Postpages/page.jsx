"use client";

import './post.css';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [posts, setPosts] = useState([]); // State for posts

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch('https://api-post-get.myads.dev/get'); 
        let data = await response.json();
        setPosts(data); // Update the state with fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Run effect once on mount



const urlimg = 'https://api-post.myads.dev/public';
let videoId = 'GgzFZSj0VDs&t';
 
const embedUrl = `https://www.youtube.com/watch?v=GgzFZSj0VDs&t=52s`;
  return (
    <>
    <head>
 
<title>PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ </title>
<meta name="title" content="PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ " />
<meta name="description" content="PostPage | เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ" />

 
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.myads.dev/https://www.myads.dev/Postpages" />
<meta property="og:title" content="PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ " />
<meta property="og:description" content="PostPage | เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ 
 รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ" />
<meta property="og:image" content="https://www.myads.dev/logo.png" />

 
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.myads.dev/https://www.myads.dev/Postpages" />
<meta property="twitter:title" content="PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ " />
<meta property="twitter:description" content="PostPage | เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ 
 รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ" />
<meta property="twitter:image" content="https://www.myads.dev/logo.png" />

<meta name="robots" content="index" />
<link rel="canonical" href="https://www.myads.dev" />


 
    </head>
  
    <div className="container   mx-auto">
      {posts.map((post) => (
        <> 
        <div className="card mx-auto mt-5" key={post.id}>

          <div className="title h3 text-center">{post.title}</div>

          {post.name ? (
            
            <>
           <iframe
                width="560"
                height="315"
                className='vdoimg'
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allow=" "
                allowFullScreen
            ></iframe>
          
          
          </>
        
        
        ):(<> 
          <img src={urlimg+post.imgvdo} className="vdoimg" alt="item" /> 
        
        </>) }



        


          <div className="card-body">
            <h3>{post.title}</h3>
            <p className="card-text">
              {post.content}
              </p>



          </div>

        </div>
      
      <br />
      <hr />
      </>
      ))}
       
    </div>

    </>
  );
}
