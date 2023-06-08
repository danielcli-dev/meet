import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("renders number input correctly", () => {
    const query = NumberOfEventsWrapper.state("query");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(query);
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      query: "32",
    });
    const eventObject = { target: { value: "16" } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("query")).toBe("16");
  });
});
