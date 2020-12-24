import { suite } from "@vangware/test";
import { find } from "../src/find";
import { isTypeString } from "../src/isTypeString";

const findString = find(isTypeString);

export default suite([
	{
		given: "an array of numbers and strings",
		must: "get the first string",
		received: findString([0, 1, "foo", 2, "bar"]),
		wanted: "foo"
	}
]);
