import { suite } from "@vangware/test";
import { isTypeNull } from "../src/isTypeNull";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeNull(BigInt(1)) && isTypeNull(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeNull(true) && isTypeNull(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeNull(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeNull(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeNull(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeNull(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeNull(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeNull(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeNull("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received: isTypeNull(Symbol("description")) && isTypeNull(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeNull([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeNull({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeNull(null),
		...wantedTrue
	},
	{
		given: "undefined",
		received: isTypeNull(undefined),
		...wantedFalse
	}
]);
