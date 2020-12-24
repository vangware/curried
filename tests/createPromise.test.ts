import { suite } from "@vangware/test";
import { createPromise } from "../src/createPromise";

const value = "foo";

export default suite([
	{
		given: "a create promise that resolves to a value",
		must: "return new promise with given value",
		received: createPromise<string>(({ resolve }) => resolve(value)),
		wanted: value
	}
]);
