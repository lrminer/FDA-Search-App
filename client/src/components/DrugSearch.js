import React from "react";
import { Form } from "react-bootstrap";
const DrugSearch = () => {
  return (
    <div>
      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Please enter the name of a drug you would like to search" />
      </Form.Group>
    </div>
  );
};

export default DrugSearch;
