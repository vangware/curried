import { suite } from "@vangware/test";
import { now } from "../src/now";

// eslint-disable-next-line functional/functional-parameters
const dateMock = { now: () => 0 };

export default suite([
	{
		given: "a mock of Date that always returns 0 for now",
		must: "return 0",
		received: now(dateMock),
		wanted: 0
	}
]);
