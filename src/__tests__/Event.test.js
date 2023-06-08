import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let event, EventWrapper;

  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render title", () => {
    expect(EventWrapper.find(".event__summary")).toHaveLength(1);
    expect(EventWrapper.find(".event__summary").text()).toBe(event.summary);
  });

  test("render body", () => {
    expect(EventWrapper.find(".event__body")).toHaveLength(1);
  });
  test("render date", () => {
    expect(EventWrapper.find(".event__date")).toHaveLength(1);
  });
  test("render text", () => {
    expect(EventWrapper.find(".event__text")).toHaveLength(1);
  });
  test("render button", () => {
    expect(EventWrapper.find(".event__button")).toHaveLength(1);
  });
  test("change details state when event clicked", () => {
    EventWrapper.find(".event__button").simulate("click");
    expect(EventWrapper.state("detailsOpen")).toBe(true);
  });
});
