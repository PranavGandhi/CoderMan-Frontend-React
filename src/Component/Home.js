import React from "react";
import { Link } from "react-router-dom";

export default function Home(){


    return (
        <>
        <div class="container px-4 py-5" id="featured-3">
  <h2 class="pb-2 border-bottom">Dashboard</h2>
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="feature col">

      <h2>Why Learn Python?</h2>
      <p>Python is a general-purpose, versatile and popular programming language. It’s great as a first language because
        it is concise and easy to read, and it is also a good language to have in any programmer’s stack as it can be
        used for everything from web development to software development and scientific applications.</p>
      <a href="https://www.w3schools.com/python/" target="_blank" class="icon-link">
        Learn Python
        <svg class="bi" width="1em" height="1em">
          
        </svg>
      </a>
    </div>
    <div class="feature col">

      <h2>Why Learn C++?</h2>
      <p>C++ is still the go-to language for solutions that need fast machine performance. AAA video games, IoT,
        embedded systems, and resource-heavy VR and AI applications all run on C or C++.</p>
      <a href="https://www.w3schools.com/cpp" target="_blank" class="icon-link">
        Learn C++
        <svg class="bi" width="1em" height="1em">
         
        </svg>
      </a>
    </div>
    <div class="feature col">

      <h2>Why Learn Java?</h2>
      <p>Unlike its predecessors, Java comes with advanced memory management tools. Runtime Environment takes care of
        memory allocation, reallocation, and deallocation automatically via an in-built software tool called the Garbage
        collector.</p>
      <a href="https://www.w3schools.com/java" target="_blank" class="icon-link">
        Learn Java
        <svg class="bi" width="1em" height="1em">
         
        </svg>
      </a>
    </div>
  </div>
</div>

<div class="container px-4 py-5" id="hanging-icons">
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div class="col d-flex align-items-start">
      <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        <svg class="bi" width="1em" height="1em">
          
        </svg>
      </div>
      <div class="shadow p-3 mb-5 bg-white rounded">
        <h2>Solve Some Programing Problems </h2>
        <p>Learn and improve your Programming fundamentals by solving some Problems</p>
        {/* <a routerLink="/questionlist" class="btn btn-primary">
          Start
        </a> */}
        <Link class="nav-link" to="/QuestionList" class="btn btn-primary">Start</Link>

      </div>
    </div>


  </div>
</div>
        
        </>
    )
}