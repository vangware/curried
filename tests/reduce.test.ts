import { suite } from "@vangware/test";
import { concat } from "../src/concat";
import { reduce } from "../src/reduce";

const array = ["foo", "bar"];
const reduceConcat = reduce<string, string>(concat);
const reduceConcatFromBaz = reduceConcat("baz");

export default suite([
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: reduceConcatFromBaz(array),
		wanted: "bazfoobar"
	}
]);
