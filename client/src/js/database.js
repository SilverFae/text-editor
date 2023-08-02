import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const postDb = async (content) =>{
  console.error('postDb not implemented');
  // the code below opens the database
const jateDB = openDB('jate', 1);
// the code below creates a transaction and object store
const tx = jateDB.transaction('jate', 'readwrite');
// the code below opens the object store
const store = tx.objectStore('jate');
// the code below puts the content into the object store
const request = store.put({ id: 1, value: content});
// this waits for the request to complete
const result = await request;
console.log(result);
return result;
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>{ console.error('getDb not implemented');
// the code below opens the database
const jateDB = openDB('jate', 1);
// the code below creates a transaction and object store
const tx = jateDB.transaction('jate', 'readonly');
// the code below opens the object store
const store = tx.objectStore('jate');
// the code below gets all the content from the object store
const request = store.getAll();
// this waits for the request to complete
const result = await request;
console.log(result);
return result;
};

initdb();