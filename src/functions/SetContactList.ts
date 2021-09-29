import Credentials from '../types/credentials';
import Send from './Send';

export const SetContactList =
  (credentials: Credentials) =>
  (contactId: number, listId: number, statusId: number = 1) => {
    return Send(credentials)('contactLists')({
      contactList: {
        list: listId,
        contact: contactId,
        status: statusId,
      },
    });
  };

export default SetContactList;
