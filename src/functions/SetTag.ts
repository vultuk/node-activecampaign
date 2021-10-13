import Credentials from '../types/credentials';
import Send from './Send';

export const SetTag = (credentials: Credentials) => (contactId: number, tagId: number) => {
  return Send(credentials)(`contactTags`)({
    contactTag: {
      contact: String(contactId),
      tag: String(tagId),
    },
  });
};

export default SetTag;
