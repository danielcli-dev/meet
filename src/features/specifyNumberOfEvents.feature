Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given user hasn’t changed the input for number of events
When the user opens the app
Then the number of events should be 32
And the user should see a maximum of 32 events

Scenario: User can change the number of events they want to see
Given the app is loaded
When the user changes the input for number of events
Then the user should see a list of events limited to the input for number of events

