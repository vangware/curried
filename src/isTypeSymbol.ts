import { SYMBOL } from "./constants";
import { isType } from "./isType";

/**
 * `typeof` "symbol" alias.
 *
 * @category Common
 */
export const isTypeSymbol = isType(SYMBOL);
