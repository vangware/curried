import { OBJECT } from "./constants";
import { isType } from "./isType";

/**
 * `typeof` "object" alias.
 *
 * @category Common
 */
export const isTypeObject = isType(OBJECT);
