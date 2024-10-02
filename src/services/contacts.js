import ContactCollection from '../db/models/contact.js';

export const getAllContacts = () => ContactCollection.find();

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
