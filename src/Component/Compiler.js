import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Question from "./Question";


export default function Compiler() {
  const [question, setquestion] = React.useState({ id: "", question: "", question_sum: ""});
  const [Testcase, setTestcase] = React.useState("");
  const [formData, setFormData] = React.useState({
    code: "",
    input: "",
    language: "py",
  });
  const [output, setOutput] = React.useState("");


 let {id}=useParams();
  React.useEffect(function () {
    
    const url = "http://localhost:3000/questions/"+id;
    axios.get(url).then((res) => {
      
      setquestion(res.data);
    });
  },[]);

  function setQuestion() {
    return (
      <>
           <Question question={question}/>
      </>
    );
  }


function handleRunTest(){

}



  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    
    const url = "http://localhost:3000/code/run";

    axios.post(url, formData).then((res) => {
      
      setOutput(res.data.output);
    });
  }
  
  

  function handleRunTest(){
    setTestcase(0) ;
    const url = "http://localhost:3000/code/submit"

    axios.post(url, {

      code: formData.code,
      language: formData.language,
      question_answers: question

    }).then((res) => {        
      setTestcase(res.data) ;
      
    })



  }

  return (
    <>
      <div class="container">
        <div class="row">
          
          {setQuestion()}
        </div>
        <div class="row">
          <div class="col-8">
          <label for="code">Code</label>
            <textarea
              value={formData.code}
              placeholder="Code"
              onChange={handleChange}
              name="code"
              rows="10"
              className="code"
            />
          </div>
          <div class="col-4">
            <div class="form-group">
            <label for="input">Input</label>
              <textarea
                value={formData.input}
                placeholder="Input"
                onChange={handleChange}
                name="input"
                rows="4"
                className="input"
              />
            </div>
            <div class="form-group">
            <label for="output">Output</label>
              <textarea
                value={output}
                placeholder="output"
                name="output"
                rows="4"
                className="output"
              />
            </div>
          </div>
          <p>Test Case Passed:{Testcase}</p>
          <div>
            <div
              class="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Run
              </button>


              <button
                type="button"
                class="btn btn-primary"
                onClick={handleRunTest}
              >
                Test
              </button>


              <div class="btn-group" role="group">
                <select
                  id="language"
                  value={formData.language}
                  onChange={handleChange}
                  name="language"
                >
                  <option value="py">Python</option>
                  <option value="cpp">C++</option>
                  <option value="c">C</option>
                  <option value="cs">C#</option>
                  <option value="java">Java</option>
                  <option value="rb">Ruby</option>
                  <option value="kt">Kotlin</option>
                  <option value="swift">Swift</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
