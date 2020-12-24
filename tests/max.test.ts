import { suite } from "@vangware/test";
import { max } from "../src/max";

const array = [10, 15, 5];

export default suite([
	{
		given: "an array of numbers",
		must: "return the biggest value",
		received: max(array),
		wanted: 15
	}
]);
