import { suite } from "@vangware/test";
import { isTypeString } from "../src/isTypeString";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeString(BigInt(1)) && isTypeString(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeString(true) && isTypeString(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeString(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeString(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeString(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeString(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeString(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeString(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeString("string"),
		...wantedTrue
	},
	{
		given: "a symbol",
		received:
			isTypeString(Symbol("description")) && isTypeString(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeString([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeString({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeString(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeString(undefined),
		...wantedFalse
	}
]);
