# Expense Tracker

Expense tracker based on https://github.com/firebaseextended/expense-tracker. Take photo of your receipt and upload it to the expense tracker to keep your expense records safe in one place.

## Usage

Before running any commands you need to create a Firebase project and save your Firebase configuration and Storage bucket URL to `.env.js` file in the root of this project. This enables the connection to Firebase.

See [Firebase Codealong](https://www.youtube.com/playlist?list=PLl-K7zZEsYLlfMZ9isO6Hfnyw040N3uT5) for detailed setup instructions.

### MVP

MVP of the expense tracker application includes CRUD operations for expenses through GUI. Host the application with the following commands:

```
cd mvp-starter
npm install
npm run dev
```

### OCR

OCR version of the expense tracker application uses Google's Cloud Vision API to extract text from receipt images. Host the application with the following commands:

```
cd ocr-starter
npm install
firebase deploy --only functions
npm run dev
```

## License

The contents of this repository are licensed under the
[Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
