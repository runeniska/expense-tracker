/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx9x9s4ogjVW4qVxppm6K-ipBQmnPZ6sU",
  authDomain: "expense-tracker-d07b6.firebaseapp.com",
  projectId: "expense-tracker-d07b6",
  storageBucket: "expense-tracker-d07b6.appspot.com",
  messagingSenderId: "620260872627",
  appId: "1:620260872627:web:2926faf637a19d65583bc6",
  measurementId: "G-9VK5MRRRFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);