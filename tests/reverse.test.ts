import { suite } from "@vangware/test";
import { reverse } from "../src/reverse";

const array = [0, 1, 2, 3];

export default suite([
	{
		given: "an array of numbers",
		must: "return a copy of that array, reversed",
		received: reverse(array),
		wanted: [3, 2, 1, 0]
	}
]);
