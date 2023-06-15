Feature: Show and hide an event details

Scenario: An event element is collapsed by default
Given user hasn’t expanded an event
When the user has opened the app
Then the user should not see any event details

Scenario: User can expand an event to see its details
Given the user has opened the app
When the user clicks the show details button
Then the user should see the event details

Scenario: User can collapse an event to hide its details
Given the event is expanded
And the event details are showing
When the user clicks the hide details button
Then the event details should collapse
