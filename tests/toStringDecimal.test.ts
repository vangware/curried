import { suite } from "@vangware/test";
import { toStringDecimal } from "../src/toStringDecimal";

export default suite([
	{
		given: "a number",
		must: "return string version of that number",
		received: toStringDecimal(100 as const),
		wanted: "100"
	},
	{
		given: "a string",
		must: "return same string",
		received: toStringDecimal("foo" as const),
		wanted: "foo"
	},
	{
		given: "a boolean",
		must: "return string form of that boolean",
		received: toStringDecimal(true as const),
		wanted: "true"
	},
	{
		given: "an object with a toString method",
		must: "return output of toString method",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringDecimal({ toString: () => "foo" as const }),
		wanted: "foo"
	},
	{
		given: "an empty object",
		must: "return [object Object]",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringDecimal({}),
		wanted: "[object Object]"
	}
]);
