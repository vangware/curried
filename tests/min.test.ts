import { suite } from "@vangware/test";
import { min } from "../src/min";

const array = [10, 15, 5];

export default suite([
	{
		given: "an array of numbers",
		must: "return the smallest value",
		received: min(array),
		wanted: 5
	}
]);
