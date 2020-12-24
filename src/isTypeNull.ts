import { NULL } from "./constants";
import { isType } from "./isType";

/**
 * `typeof` "null" alias. This "patches" typeof so `null` is not `"object"` but
 * `"null"` instead (rejected proposal for lack of backwards compatibility, more
 * details [here](http://lshi.ru/null-typeof)).
 *
 * @category Common
 */
export const isTypeNull = isType(NULL);
