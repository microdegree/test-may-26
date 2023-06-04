import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'keyAywRlrwgScQVhY' }).base(
  'appo9QNCqgrMYau6A'
);

export default base;
