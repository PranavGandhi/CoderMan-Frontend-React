import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import data from "./data";

export default function QuestionList() {
  const [questionList, setquestionList] = React.useState([{id: "", question: "", question_sum: ""}]);

   
  React.useEffect(function() {

    const url = "http://localhost:3000/questions/all";
    axios.get(url).then((res) => {
      setquestionList(res.data);
    });
    

  },[])

 
  //<div>{ques.question} {ques.question_sum}</div>

  const questionElement = questionList.map((ques) => {
    return (
      <>
        <tr>
          <th >{ques.id}</th>
          <td>{ques.question}</td>
          <td>{ques.question_sum}</td>
          <td>
          <Link class="nav-link" to={"/Compiler/"+ques.id} class="btn btn-primary">Solve</Link>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div  >
      
      <table class="table table-striped" className="qlist"> 
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Question Name</th>
            <th scope="col">Question Description</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>{questionElement}</tbody>
      </table>
    </div>
  );
}
