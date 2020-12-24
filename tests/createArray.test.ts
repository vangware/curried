import { suite } from "@vangware/test";
import { createArray } from "../src/createArray";

export default suite([
	{
		given: "a create array with the value 3",
		must: "return new array of length 3",
		received: createArray(3),
		wanted: [undefined, undefined, undefined]
	}
]);
