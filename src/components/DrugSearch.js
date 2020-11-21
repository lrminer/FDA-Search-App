import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const DrugSearch = () => {
  const [searchTerm, setSearchTerm] = useState("Caffeine");
  const [info, setInfo] = useState({});
  const handleSubmit = async () => {
    const result = await axios.get(
      `https://api.fda.gov/drug/label.json?search=description:${searchTerm}`
    );
    console.log(result);
    // const { data } = result;
    const { results } = result.data;

    console.log(results);

    setInfo({ ...results[0] });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Drug Search</h1>

            <Form.Group>
              <Form.Control
                className="mt-5"
                size="lg"
                type="text"
                placeholder="Please enter the name of a drug you would like to search"
                value={searchTerm}
                onChange={handleOnChange}
              />
              <Button className="mt-5" onClick={handleSubmit} type="submit">
                Search
              </Button>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-5">
              {info.indications_and_usage && info.indications_and_usage[0]}
            </div>
            <div className="mt-5">
              {info.dosage_and_administration &&
                info.dosage_and_administration[0]}
            </div>
            <div className="mt-5">
              {info.dosage_forms_and_strengths &&
                info.dosage_forms_and_strengths[0]}
            </div>
            <div className="mt-5">
              {info.contraindications && info.contraindications[0]}
            </div>
            <div className="mt-5">
              {info.warnings_and_cautions && info.warnings_and_cautions[0]}
            </div>
            <div className="mt-5">
              {info.adverse_reactions && info.adverse_reactions[0]}
            </div>
            <div className="mt-5">
              {info.drug_interactions && info.drug_interactions[0]}
            </div>
            <div className="mt-5">
              {info.use_in_specific_populations &&
                info.use_in_specific_populations[0]}
            </div>
            <div className="mt-5">{info.pregnancy && info.pregnancy[0]}</div>
            <div className="mt-5">
              {info.pediatric_use && info.pediatric_use[0]}
            </div>
            <div className="mt-5">
              {info.geriatric_use && info.geriatric_use[0]}
            </div>
            <div className="mt-5">
              {info.drug_abuse_and_dependence &&
                info.drug_abuse_and_dependence[0]}
            </div>
            <div className="mt-5">
              {info.controlled_substance && info.controlled_substance[0]}
            </div>
            <div className="mt-5">{info.abuse && info.abuse[0]}</div>
            <div className="mt-5">{info.dependence && info.dependence[0]}</div>
            <div className="mt-5">{info.overdosage && info.overdosage[0]}</div>
            <div className="mt-5">
              {info.description && info.description[0]}
            </div>
            <div className="mt-5">
              {info.clinical_pharmacology && info.clinical_pharmacology[0]}
            </div>
            <div className="mt-5">
              {info.mechanism_of_action && info.mechanism_of_action[0]}
            </div>
            <div className="mt-5">
              {info.pharmacodynamics && info.pharmacodynamics[0]}
            </div>
            <div className="mt-5">
              {info.pharmacokinetics && info.pharmacokinetics[0]}
            </div>
            <div className="mt-5">
              {info.non_clinical_toxicology && info.non_clinical_toxicology[0]}
            </div>
            <div className="mt-5">
              {info.how_supplied && info.how_supplied[0]}
            </div>
            <div className="mt-5">
              {info.information_for_patients &&
                info.information_for_patients[0]}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DrugSearch;
