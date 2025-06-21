import { strCompare } from "./types";
import { stringify } from "querystringify";

export type QueryParams = Record<string, string | number | undefined | null>;

/**
 * Converts a set of query parameters into a query string.
 * @param queryParams
 */
export function queryParamsCreate(
  queryParams: QueryParams,
): string {
  const newQueryParams = Object.entries(queryParams)
    // Remove anything that is undefined
    .filter(([, value]) => value !== undefined && value !== null)
    // Sort query parameters in order
    .sort((a, b) => strCompare(a[0], b[0]))
    .reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value }),
      {},
    );

  return stringify(newQueryParams, "");
}
