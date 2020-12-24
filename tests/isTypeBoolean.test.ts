import { suite } from "@vangware/test";
import { isTypeBoolean } from "../src/isTypeBoolean";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeBoolean(BigInt(1)) && isTypeBoolean(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeBoolean(true) && isTypeBoolean(false),
		...wantedTrue
	},
	{
		given: "a date",
		received: isTypeBoolean(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeBoolean(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeBoolean(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeBoolean(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeBoolean(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeBoolean(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeBoolean("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeBoolean(Symbol("description")) && isTypeBoolean(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeBoolean([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeBoolean({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeBoolean(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeBoolean(undefined),
		...wantedFalse
	}
]);
