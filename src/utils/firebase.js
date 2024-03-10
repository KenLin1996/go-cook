// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAUx0SePvydn5tnfIc6DLSuyWhA05ZZsQ4",
//   authDomain: "go-cook-82021.firebaseapp.com",
//   projectId: "go-cook-82021",
//   storageBucket: "go-cook-82021.appspot.com",
//   messagingSenderId: "679413686612",
//   appId: "1:679413686612:web:d5da0e61eccfed8746a8c1",
// };

// const app = initializeApp(firebaseConfig);

// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUx0SePvydn5tnfIc6DLSuyWhA05ZZsQ4",
  authDomain: "go-cook-82021.firebaseapp.com",
  projectId: "go-cook-82021",
  storageBucket: "go-cook-82021.appspot.com",
  messagingSenderId: "679413686612",
  appId: "1:679413686612:web:d5da0e61eccfed8746a8c1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
