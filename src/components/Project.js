import React from "react";
function Project() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="project-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Language</th>
            <th scope="col">Project Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atm Interface</td>
            <td>Java</td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr>
            <td>Fee Report</td>
            <td>Java</td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr>
            <td>Currency Converter</td>
            <td>Java</td>
            <td><a href="#">Link</a></td>
          </tr>
          <tr>
            <td>Number Guess</td>
            <td>Java</td>
            <td><a href="#">Link</a></td>
          </tr>
          <tr>
            <td>Scientific Calculator</td>
            <td>Java</td>
            <td><a href="#">Link</a></td>
          </tr>
          <tr>
            <td>Tic Tac Toe</td>
            <td>Java</td>
            <td><a href="#">Link</a></td>
          </tr>
          <tr>
            <td>Calculator</td>
            <td>Android Java</td>
            <td><a href="#">Link</a></td>
          </tr>
          <tr>
            <td>Temperature Converter</td>
            <td>Android Java</td>
            <td><a href="#">Link</a></td>
          </tr>
          <tr>
            <td>Tic Tac Toe</td>
            <td>Android Java</td>
            <td><a href="#">Link</a></td>
          </tr>
        </tbody>
      </table>
      </div>
      <br />
    </div>
  );
}

export default Project;
