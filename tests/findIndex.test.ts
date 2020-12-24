import { suite } from "@vangware/test";
import { findIndex } from "../src/findIndex";
import { isTypeString } from "../src/isTypeString";

const findIndexString = findIndex(isTypeString);

export default suite([
	{
		given: "an array of numbers and strings",
		must: "get the index of the first string",
		received: findIndexString([0, 1, "foo", 2, "bar"]),
		wanted: 2
	}
]);
