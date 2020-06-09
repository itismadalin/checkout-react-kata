import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Start from "./components/Start/Start";
import PricingRule from "./components/PricingRule/PricingRule";
import PricingRules from "./components/PricingRules/PricingRules";
import Button from "react-bootstrap/Button";

//Start

test("renders Start button text", () => {
  const { getByText } = render(<Start />);
  const button = getByText("Start");
  expect(button).toBeInTheDocument();
});

test("Start button is always enabled", () => {
  const { getByText } = render(<Start />);
  const button = getByText("Start");
  expect(button).toBeEnabled();
});

test("Start button is always visible", () => {
  const { getByText } = render(<Start />);
  const button = getByText("Start");
  expect(button).toBeVisible();
});

//PricingRules

it('calls "onClick" on Add Row button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<div>
    <Button onClick={onClick}>
      Add Row
    </Button>
  </div>);

  fireEvent.click(getByText(/Add Row/i));
  expect(onClick).toHaveBeenCalled();
});

it('calls "onClick" on Remove Last button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<div>
    <Button onClick={onClick}>
      Remove Last
    </Button>
  </div>);

  fireEvent.click(getByText(/Remove Last/i));
  expect(onClick).toHaveBeenCalled();
});

it('calls "onClick" on Scan Items button click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<div>
    <Button onClick={onClick}>
      Scan Items
    </Button>
  </div>);

  fireEvent.click(getByText(/Scan Items/i));
  expect(onClick).toHaveBeenCalled();
});

