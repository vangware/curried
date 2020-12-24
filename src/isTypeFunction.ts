import { FUNCTION } from "./constants";
import { isType } from "./isType";

/**
 * `typeof` "function" alias.
 *
 * @category Common
 */
export const isTypeFunction = isType(FUNCTION);
