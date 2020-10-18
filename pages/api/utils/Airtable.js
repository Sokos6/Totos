

const Airtable = require('airtable');
const APIKEY = 'key3JTA1vY72mTNb1';
const base = new Airtable({ apiKey: APIKEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIR_TABLE_NAME);

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

const getMinifiedRecord = (record) => {
  if (!record.fields.completed) {
    record.fields.completed = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, getMinifiedRecord, minifyRecords };
