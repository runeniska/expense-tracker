import functions, { logger } from 'firebase-functions';
import vision from '@google-cloud/vision';
import admin from 'firebase-admin';

admin.initializeApp();

export const readReceiptDetails = functions.storage.object().onFinalize(async (object) => {
  const imageBucket = `gs://${object.bucket}/${object.name}`;
  const client = new vision.ImageAnnotatorClient();

  const [textDetections] = await client.textDetection(imageBucket);
  const [annotation] = textDetections.textAnnotations;
  const text = annotation ? annotation.description : '';
  logger.log(text);

  // @TODO Parse text

  // Get user ID
  // object.name is userID/timestamp
  const re = /(.*)\//;
  const uid = re.exec(object.name)[1];

  // Going to hardcode returned text for relevant fields
  const receipt = {
    address: 'Jätkäsaari',
    amount: '210.97',
    date: new Date(),
    imageBucket,
    items: 'Air Fryer, Poppamies Majoneesi, Weekender Bag',
    locationName: 'Verkkokauppa.com',
    isConfirmed: false,
    uid
  };

  admin.firestore().collection('receipts').add(receipt);
});