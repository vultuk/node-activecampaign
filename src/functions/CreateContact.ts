import Contact from '../types/contact';
import Credentials from '../types/credentials';
import Send from './Send';

export const CreateContact =
  (credentials: Credentials) => (fieldValues?: { field: string; value: string }[]) => (contact: Contact) => {
    const newLead: any = {
      contact: {
        ...contact,
      },
    };

    if (fieldValues) {
      newLead.contact['fieldValues'] = fieldValues;
    }

    return Send(credentials)('contacts')(newLead);
  };

export default CreateContact;
