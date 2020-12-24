import { suite } from "@vangware/test";
import { random } from "../src/random";

// eslint-disable-next-line functional/functional-parameters
const mathMock = { random: () => 0 };

export default suite([
	{
		given: "a mock of Math that always returns 0 for random",
		must: "return 0",
		received: random(mathMock),
		wanted: 0
	}
]);
