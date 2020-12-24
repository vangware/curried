import { suite } from "@vangware/test";
import { isTypeUndefined } from "../src/isTypeUndefined";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: isTypeUndefined(BigInt(1)) && isTypeUndefined(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: isTypeUndefined(true) && isTypeUndefined(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: isTypeUndefined(new Date()),
		...wantedFalse
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: isTypeUndefined(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: isTypeUndefined(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: isTypeUndefined(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			isTypeUndefined(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			isTypeUndefined(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: isTypeUndefined("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			isTypeUndefined(Symbol("description")) &&
			isTypeUndefined(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: isTypeUndefined([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: isTypeUndefined({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: isTypeUndefined(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: isTypeUndefined(undefined),
		...wantedTrue
	}
]);
