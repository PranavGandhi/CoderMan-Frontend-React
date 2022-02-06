import React from "react";


export default function Question(props) {
    

    return(<>
    <div class="row2">Question
         <p></p>
          <h3>{ props.question.question }</h3>
          <p></p>
          <p>{ props.question.question_sum }</p>
        </div>
        <div class="row2">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="samp_input">Sample Input</label>
                <p></p>
                <p>{ props.question.samp_input }</p>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="samp_output">Sample Output</label>
                <p></p>
                <p>{ props.question.samp_output }</p>
              </div>
            </div>
          </div>
        </div>
    </>)
}