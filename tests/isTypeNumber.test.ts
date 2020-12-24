import { suite } from "@vangware/test";
import { isTypeNumber } from "../src/isTypeNumber";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeNumber(BigInt(1)) && isTypeNumber(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeNumber(true) && isTypeNumber(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeNumber(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeNumber(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeNumber(1),
		...wantedTrue
	},
	{
		given: "a promise",
		received: isTypeNumber(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeNumber(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeNumber(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeNumber("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeNumber(Symbol("description")) && isTypeNumber(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeNumber([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeNumber({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeNumber(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeNumber(undefined),
		...wantedFalse
	}
]);
