import { React, useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { Button, Container, Table } from "react-bootstrap";
function Display({ editdata, isNotEdit }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  function deletedata(index) {
    const newdata = data.filter((data2, index2) => {
      return index2 !== index;
    });
    setData(newdata);
    localStorage.setItem("data", JSON.stringify(newdata));
  }

  return (
    <Container className="main-display" fluid>
      <h1 style={{ textAlign: "center" }}>List Of User Details</h1>
      <Button
        className="mb-2"
        onClick={() => {
          isNotEdit();
          navigate("/");
        }}
        variant="primary"
      >
        Go to Create
      </Button>{" "}
      <Table className="table" striped bordered hover>
        <thead className="thead">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th style={{ textAlign: "center" }} colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        {data &&
          data.map((data, index) => {
            return (
              <tbody className="tbody" key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.username}</td>
                  <td>{data.email} </td>
                  <td>{data.number}</td>

                  <td style={{ textAlign: "end" }}>
                    <Button
                      onClick={() => {
                        navigate("/");
                        editdata(index);
                      }}
                      variant="primary"
                    >
                      Edit
                    </Button>{" "}
                  </td>
                  <td style={{ textAlign: "start" }}>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deletedata(index);
                      }}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </Container>
  );
}

export default Display;
