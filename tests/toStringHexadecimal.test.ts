import { suite } from "@vangware/test";
import { toStringHexadecimal } from "../src/toStringHexadecimal";

export default suite([
	{
		given: "a number",
		must: "return string version of that number",
		received: toStringHexadecimal(100 as const),
		wanted: "64"
	},
	{
		given: "a string",
		must: "return same string",
		received: toStringHexadecimal("foo" as const),
		wanted: "foo"
	},
	{
		given: "a boolean",
		must: "return string form of that boolean",
		received: toStringHexadecimal(true as const),
		wanted: "true"
	},
	{
		given: "an object with a toString method",
		must: "return output of toString method",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringHexadecimal({ toString: () => "foo" as const }),
		wanted: "foo"
	},
	{
		given: "an empty object",
		must: "return [object Object]",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringHexadecimal({}),
		wanted: "[object Object]"
	}
]);
