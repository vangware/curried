import { suite } from "@vangware/test";
import { instanceOfDate } from "../src/instanceOfDate";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a BigInt",
		received: instanceOfDate(BigInt(1)) && instanceOfDate(BigInt("1")),
		...wantedFalse
	},
	{
		given: "a boolean",
		received: instanceOfDate(true) && instanceOfDate(false),
		...wantedFalse
	},
	{
		given: "a date",
		received: instanceOfDate(new Date()),
		...wantedTrue
	},
	{
		given: "a function",
		// eslint-disable-next-line functional/functional-parameters
		received: instanceOfDate(() => undefined),
		...wantedFalse
	},
	{
		given: "a number",
		received: instanceOfDate(1),
		...wantedFalse
	},
	{
		given: "a promise",
		received: instanceOfDate(Promise.resolve()),
		...wantedFalse
	},
	{
		given: "a regular expression",
		received:
			instanceOfDate(/expression/u) &&
			// eslint-disable-next-line prefer-regex-literals
			instanceOfDate(new RegExp("expression", "u")),
		...wantedFalse
	},
	{
		given: "a string",
		received: instanceOfDate("string"),
		...wantedFalse
	},
	{
		given: "a symbol",
		received:
			instanceOfDate(Symbol("description")) && instanceOfDate(Symbol(1)),
		...wantedFalse
	},
	{
		given: "an array",
		received: instanceOfDate([]),
		...wantedFalse
	},
	{
		given: "an object",
		received: instanceOfDate({}),
		...wantedFalse
	},
	{
		given: "null",
		// eslint-disable-next-line no-null/no-null
		received: instanceOfDate(null),
		...wantedFalse
	},
	{
		given: "undefined",
		received: instanceOfDate(undefined),
		...wantedFalse
	}
]);
