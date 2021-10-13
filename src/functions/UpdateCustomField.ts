import Credentials from '../types/credentials';
import Send from './Send';

export const UpdateCustomField = (credentials: Credentials) => (contactId: number, fieldId: number, value: string) => {
  return Send(credentials)(`contacts/${contactId}`)({
    fieldValues: [
      {
        field: String(fieldId),
        value,
      },
    ],
  });
};

export default UpdateCustomField;
