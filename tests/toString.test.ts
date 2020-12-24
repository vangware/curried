import { suite } from "@vangware/test";
import { toString } from "../src/toString";

const toStringDecimal = toString(10);
const toStringHexadecimal = toString(16);
const toStringBinary = toString(2);

export default suite([
	{
		given: "a decimal number and a decimal parser",
		must: "return string version of that number",
		received: toStringDecimal(10 as const),
		wanted: "10"
	},
	{
		given: "a string and a decimal parser",
		must: "return same string",
		received: toStringDecimal("foo" as const),
		wanted: "foo"
	},
	{
		given: "a hexadecimal number and a hexadecimal parser",
		must: "return string version of that number",
		received: toStringHexadecimal(0x10),
		wanted: "10"
	},
	{
		given: "a hexadecimal number and a hexadecimal parser",
		must: "return string version of that number",
		received: toStringBinary(0b10),
		wanted: "10"
	},
	{
		given: "a string",
		must: "return same string",
		received: toString("foo" as const),
		wanted: "foo"
	},
	{
		given: "a boolean",
		must: "return string form of that boolean",
		received: toString(true as const),
		wanted: "true"
	},
	{
		given: "an object with a toString method",
		must: "return output of toString method",
		// eslint-disable-next-line functional/functional-parameters
		received: toString({ toString: () => "foo" as const }),
		wanted: "foo"
	},
	{
		given: "an empty object",
		must: "return [object Object]",
		// eslint-disable-next-line functional/functional-parameters
		received: toString({}),
		wanted: "[object Object]"
	}
]);
