import { suite } from "@vangware/test";
import { bind } from "../src/bind";

const context = {
	exclamationMark: "!!!!"
};
const source = {
	exclamationMark: "!",
	// eslint-disable-next-line sort-keys
	exclaim(word: string) {
		// eslint-disable-next-line functional/no-this-expression
		return `${word}${this.exclamationMark}`;
	}
};

const bindContext = bind(context);
// eslint-disable-next-line @typescript-eslint/unbound-method
const boundExclaim = bindContext(source.exclaim);

export default suite([
	{
		given: "a context and a function",
		must: "return the same function bound to the new context",
		received: boundExclaim("foobar"),
		wanted: "foobar!!!!"
	}
]);
