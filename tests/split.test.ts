import { suite } from "@vangware/test";
import { split } from "../src/split";

const spaceSplit = split(" ");
const numbers = "0 1 2 3";

export default suite([
	{
		given: "a string with numbers separated with spaces",
		must: "return an array with those numbers",
		received: spaceSplit(numbers),
		wanted: ["0", "1", "2", "3"]
	}
]);
