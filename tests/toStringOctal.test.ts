import { suite } from "@vangware/test";
import { toStringOctal } from "../src/toStringOctal";

export default suite([
	{
		given: "a number",
		must: "return string version of that number",
		received: toStringOctal(100 as const),
		wanted: "144"
	},
	{
		given: "a string",
		must: "return same string",
		received: toStringOctal("foo" as const),
		wanted: "foo"
	},
	{
		given: "a boolean",
		must: "return string form of that boolean",
		received: toStringOctal(true as const),
		wanted: "true"
	},
	{
		given: "an object with a toString method",
		must: "return output of toString method",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringOctal({ toString: () => "foo" as const }),
		wanted: "foo"
	},
	{
		given: "an empty object",
		must: "return [object Object]",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringOctal({}),
		wanted: "[object Object]"
	}
]);
