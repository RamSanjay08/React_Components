import React, { useCallback, useEffect, useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";

const FilteringTable = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = useMemo(()=> {
    return data.filter((item) => {
      return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search)
    })
  },[data,search])

  return (
    <Container>
      <h1 className="mt-4 text-center text-3xl font-bold">Contact Details</h1>
      <Form>
        <InputGroup className="my-3">
          <Form.Control
            placeholder="Search Items"
            onChange={handleSearchInput}
          />
        </InputGroup>
      </Form>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {filteredData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default FilteringTable;
