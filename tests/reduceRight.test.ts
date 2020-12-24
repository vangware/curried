import { suite } from "@vangware/test";
import { concat } from "../src/concat";
import { reduceRight } from "../src/reduceRight";

const array = ["foo", "bar"];
const reduceRightConcat = reduceRight<string, string>(concat);
const reduceRightConcatFromBaz = reduceRightConcat("baz");

export default suite([
	{
		given: "an array of numbers and a subtract reducer",
		must: "return the total subtraction from right",
		received: reduceRightConcatFromBaz(array),
		wanted: "bazbarfoo"
	}
]);
