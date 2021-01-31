import { suite } from "@vangware/test";
import { toStringBinary } from "../src/toStringBinary";

export default suite([
	{
		given: "a number",
		must: "return string version of that number",
		received: toStringBinary(100 as const),
		wanted: "1100100"
	},
	{
		given: "a string",
		must: "return same string",
		received: toStringBinary("foo" as const),
		wanted: "foo"
	},
	{
		given: "a boolean",
		must: "return string form of that boolean",
		received: toStringBinary(true as const),
		wanted: "true"
	},
	{
		given: "an object with a toString method",
		must: "return output of toString method",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringBinary({ toString: () => "foo" as const }),
		wanted: "foo"
	},
	{
		given: "an empty object",
		must: "return [object Object]",
		// eslint-disable-next-line functional/functional-parameters
		received: toStringBinary({}),
		wanted: "[object Object]"
	}
]);
