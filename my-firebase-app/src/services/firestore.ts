import { Firestore, CollectionReference, DocumentReference, DocumentData } from 'firebase/firestore';
import { DocumentData as DocumentDataInterface, User } from '../types';

export class FirestoreService {
    private db: Firestore;
    private collectionRef: CollectionReference<DocumentData>;

    constructor(db: Firestore, collectionName: string) {
        this.db = db;
        this.collectionRef = db.collection(collectionName);
    }

    async createDocument(data: DocumentDataInterface): Promise<DocumentReference<DocumentData>> {
        const docRef = await this.collectionRef.add(data);
        return docRef;
    }

    async readDocument(docId: string): Promise<DocumentData | null> {
        const docRef = this.collectionRef.doc(docId);
        const doc = await docRef.get();
        return doc.exists() ? doc.data() : null;
    }

    async updateDocument(docId: string, data: Partial<DocumentDataInterface>): Promise<void> {
        const docRef = this.collectionRef.doc(docId);
        await docRef.update(data);
    }

    async deleteDocument(docId: string): Promise<void> {
        const docRef = this.collectionRef.doc(docId);
        await docRef.delete();
    }
}