import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";
import EventList from "../EventList";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
    and,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;

    given("user hasn’t changed the input for number of events", () => {});

    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("the number of events should be 32", () => {
      AppWrapper.update();
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("query")).toBe(32);
    });

    and("the user should see a maximum of 32 events", () => {
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });
  });

  // test("User can change the number of events they want to see", ({
  //   given,
  //   when,
  //   then,
  //   and,
  // }) => {
  //   let AppWrapper;
  //   let NumberOfEventsWrapper;
  //   given("the app is loaded", () => {});

  //   when("the user changes the input for number of events", () => {
  //     AppWrapper = mount(<App />);
  //   });

  //   then(
  //     "the user should see a list of events limited to the input for number of events",
  //     () => {
  //       AppWrapper.update();
  //       NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
  //       expect(NumberOfEventsWrapper.state("query")).toBe(32);
  //     }
  //   );
  //   and("the user should see a maximum of 32 events", () => {
  //     expect(AppWrapper.state("events")[0]).toEqual("hi");
  //   });
  // });
  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    let EventListWrapper;
    given("the app is loaded", async () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
    });

    when("the user changes the input for number of events", async () => {
      AppWrapper.update();
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("query")).toBe(32);
      NumberOfEventsWrapper.find(".number").simulate("change", {
        target: { value: 1 },
      });
    });

    then(
      "the user should see a list of events limited to the input for number of events",
      async () => {
        AppWrapper.update();
        expect(AppWrapper.state("numberOfEvents")).toBe(1);
        expect(AppWrapper.find(".event")).toHaveLength(1);
      }
    );
  });
});
