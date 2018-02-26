# Testing

### Introduction:

  We have three kinds of tests:
  * snapshots
  * component / logic unit tests
  * integration tests

#### Snapshots

  These are standard jest snapshot tests. They here basically to alert us if something changes. Find out more here: https://facebook.github.io/jest/docs/en/snapshot-testing.html

#### Unit Tests

  These are really straight forward for logic.

  For components it's a little trickier. We use enzyme in addition to Jest. I don't stray far from the convention demonstrated in the docs and most examples.

  Use common sense when decided what to test in the UI. Don't waste time.

#### Integration

  Okay, so these are much more complicated. Each feature has a integration test. It also has a file to prepare a slightly modified store with the concerned sagas (modified but acceptable for our testing purposes). We then create middleware that logs each action and export the log from the test store file.

  Then we pass the container (there should really only be one per feature) into a Redux <Prodvider/> component.

  This way, when we interact with the UI via enzyme (using async/await) we can check the new redux state, the actions produced by saga, and the any UI changes.

  This probably still has room for improvement, for instance what if we need to include other reducers? Should we import them via their feature API? Still, in terms of feature testing, this feels like a solid way to do integration tests.
