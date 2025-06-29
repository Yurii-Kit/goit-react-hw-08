import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (listItems, filter) => {
    const normalized = filter.toLowerCase();
    return listItems.filter(
      (listItem) =>
        listItem.name.toLowerCase().includes(normalized) ||
        listItem.number.includes(filter),
    );
  },
);
