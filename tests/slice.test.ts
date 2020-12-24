import { suite } from "@vangware/test";
import { slice } from "../src/slice";

const array = [0, 1, 2, 3];

export default suite([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: slice(1)(3)(array),
		wanted: [1, 2]
	}
]);
