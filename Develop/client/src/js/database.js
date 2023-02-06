// set up the database

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

// method that accepts content and stores in database
export const putDb = async (content) => { // async await for putting content in db
    console.error('putDb not implemented'); // error message
    const jateDB = await openDB('jate', 1); // (name of db, version number)
    const tx = jateDB.transaction('jate', 'readwrite'); // (db to use, set privelages to read & write)
    const store = tx.objectStore('jate'); // (object to store in db)
    const request = store.put({ jate: content }); // (using put to store content in jate db)
    const result = await request; // send the requested result
    console.log("Data saved to the database", result); // log success message
}

// method that retrieves all the content from the database
export const getDb = async () => { // async await for getting content from db
    console.error('getDb not implemented');
    const jateDB = await openDB('jate', 1);
    const tx = jateDB.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll(); // getAll() method to retrieve all data in db
    const result = await request;
    console.log('result.value', result);
}

initdb();