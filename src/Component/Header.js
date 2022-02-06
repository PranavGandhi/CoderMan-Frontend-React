import React from "react";
import { Link } from "react-router-dom";


export default function Header(){
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/home">CoderMan</Link>
  <Link class="nav-link" to="/QuestionList">Question</Link>
  {/* <Link class="nav-link" to="/Compiler">Compiler</Link>   */}
 </nav>
        </>
    )
}