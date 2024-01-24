import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from "./data"

const FilteringTable = () => {
  return (
    <Container>
      <h1 className="mt-4 text-center text-3xl font-bold">Contact Details</h1>
      <Form>
        <InputGroup className="my-3">
          <Form.Control placeholder="Search Items"/>
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
        {data.map(({id,first_name,last_name,email,phone})=> {
          return <tr key={id}>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        })}
        </tbody>
      </Table>
    </Container>
  );
};

export default FilteringTable;
