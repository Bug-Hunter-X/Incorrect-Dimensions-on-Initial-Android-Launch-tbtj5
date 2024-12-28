This repository demonstrates a common bug in React Native where the Dimensions API returns incorrect window dimensions on the initial app launch for Android. The bug is reproduced and a solution is provided. The solution involves using the `Dimensions.addEventListener` to listen for changes and ensuring the component re-renders with the correct dimensions.

**Bug:** Incorrect dimensions are returned by `Dimensions.get('window')` on initial launch, leading to layout issues.

**Solution:** Using `Dimensions.addEventListener` to capture dimension changes and trigger re-renders.