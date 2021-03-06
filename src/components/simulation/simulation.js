import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import TradesTable from "../tables/trades-table";
import StrategyForm from "../../redux/containers/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import Error from "../errors/error";
import ResultJumbotron from "./result-jumbotron";
import "../simulation/simulation.css";

const Simulation = ({ error, candleSticks, transformedCandleSticks, roi }) => (
  <Grid>
    <Row>
      <Col xs={8} sm={6} md={3} xsOffset={2} smOffset={3} mdOffset={0}>
        <StrategyForm />
      </Col>
      <Col xs={12} md={9}>
        {(error || transformedCandleSticks) && (
          <div className="simulation-chart-container">
            {error && <Error message={error.message} />}
            {transformedCandleSticks && (
              <CandleStickChart candleSticks={transformedCandleSticks} />
            )}
          </div>
        )}
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <div className="trades-table-and-jumbotron-container">
          {roi != null && <ResultJumbotron roi={roi} />}
          {candleSticks && <TradesTable candleSticks={candleSticks} />}
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Simulation;
