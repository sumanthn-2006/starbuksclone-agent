import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const createDocument = functions.https.onRequest(async (req, res) => {
    const data = req.body;
    const docRef = admin.firestore().collection('your-collection-name').doc();
    await docRef.set(data);
    res.status(201).send({ id: docRef.id });
});

export const readDocument = functions.https.onRequest(async (req, res) => {
    const docId = req.params.id;
    const docRef = admin.firestore().collection('your-collection-name').doc(docId);
    const doc = await docRef.get();
    if (!doc.exists) {
        return res.status(404).send('Document not found');
    }
    res.status(200).send(doc.data());
});

export const updateDocument = functions.https.onRequest(async (req, res) => {
    const docId = req.params.id;
    const data = req.body;
    const docRef = admin.firestore().collection('your-collection-name').doc(docId);
    await docRef.update(data);
    res.status(200).send('Document updated');
});

export const deleteDocument = functions.https.onRequest(async (req, res) => {
    const docId = req.params.id;
    const docRef = admin.firestore().collection('your-collection-name').doc(docId);
    await docRef.delete();
    res.status(200).send('Document deleted');
});