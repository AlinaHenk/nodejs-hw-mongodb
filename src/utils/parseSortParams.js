import { SORT_ORDER } from '../constants/index.js';
import { sortFields } from '../db/models/contact.js';

export const parseSortParams = ({ sortBy, sortParams }) => {
  const parsedSortOder = SORT_ORDER.includes(sortParams)
    ? sortParams
    : SORT_ORDER[0];
  const prasedSortBy = sortFields.includes(sortBy) ? sortBy : '_id';

  return {
    sortBy: prasedSortBy,
    sortParams: parsedSortOder,
  };
};
