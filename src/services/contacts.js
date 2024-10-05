import ContactCollection from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllContacts = async ({
  perPage,
  page,
  sortBy = '_id',
  sortParams = SORT_ORDER[0],
}) => {
  const skip = (page - 1) * perPage;

  const contacts = await ContactCollection.find()
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortParams });
  const count = await ContactCollection.find().countDocuments();

  const paginationData = calculatePaginationData({ count, perPage, page });

  return {
    contacts,
    page,
    perPage,
    totalItems: count,
    ...paginationData,
  };
};

export const getContactById = (id) => ContactCollection.findById(id);

export const createContact = (contactload) =>
  ContactCollection.create(contactload);

export const updateContact = (filter, data, options = {}) => {
  return ContactCollection.findOneAndUpdate(filter, data, {
    new: true,
    ...options,
  });
};

export const deleteContact = (filter) =>
  ContactCollection.findOneAndDelete(filter);
