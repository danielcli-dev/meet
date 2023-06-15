import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";

// import CitySearch from "../CitySearch";
// import { extractLocations } from "../api";
const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    let eventDetails;
    given("user hasn’t expanded an event", () => {});

    when("the user has opened the app", () => {
      AppWrapper = mount(<App />);
    });

    then("the user should not see any event details", () => {
      AppWrapper.update();
      eventDetails = AppWrapper.find(".event .event__details");
      expect(eventDetails.length).toBe(0);
    });
  });
  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let eventDetails;
    given("the user has opened the app", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks the show details button", () => {
      AppWrapper.update();
      AppWrapper.find(".event__button").at(0).simulate("click");
      eventDetails = AppWrapper.find(".event .event__details");
      expect(eventDetails).toBeDefined();
    });

    then("the user should see the event details", () => {});
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    let eventDetails;
    given("the event is expanded", () => {
      AppWrapper = mount(<App />);
    });

    and("the event details are showing", () => {
      AppWrapper.update();
      AppWrapper.find(".event__button").at(0).simulate("click");
      eventDetails = AppWrapper.find(".event .event__details");
      expect(eventDetails).toBeDefined();
    });

    when("the user clicks the hide details button", () => {
      AppWrapper.find(".event__button").at(0).simulate("click");
    });

    then("the event details should collapse", () => {
      AppWrapper.update();
      eventDetails = AppWrapper.find(".event .event__details");
      expect(eventDetails.length).toBe(0);
    });
  });
});
