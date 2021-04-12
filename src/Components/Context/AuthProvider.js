import React from "react"
import createDataContext from "./createDataContext";
import {firebase} from "../../FirebaseInit"

const authReducer = (state, action) => {
    switch (action.type) {
        case "errorMessage":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { ...state, user: action.payload, loggedIn: action.loggedIn };
        case "signout":
            return { ...state, user: action.payload, loggedIn: false };
        case "signup":
            return {
                ...state,
                user: action.payload.user,
                registered: true,
            };
         case "persistLogin":
                return {
                  ...state,
                  user: action.payload.user,
                  loggedIn: action.payload.loggedIn,
                  loading: false,
                };
    }

}


const signin = (dispatch) => (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response)=>{
                         // Llamar el reducer y enviarle los valores del usuario al estado
                         dispatch({ type: "errorMessage", payload: "" });
                         dispatch({ type: "signin", payload: response , loggedIn:true  });
                         alert("se logueo correctamente")
        })
         .catch((error) => {
            dispatch({ type: "errorMessage", payload: error.message });
            alert(error.message)
        });
}
const signout = (dispatch) => () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({ type: "signout", payload: {} });
        })
        
};

const signup = (dispatch) => (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // Obtener el Unique Identifier generado para cada usuario
        // Firebase -> Authentication
            dispatch({
              type: "signup",
              payload: { user: response, registered: true },
            });
        alert ("Cuenta creada")
          
      }).catch((error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      })
  
  };

  const persistLogin = (dispatch) => () => {
    const userRef = firebase.firestore().collection("users");
  
    // Si el usuario ya se ha autenticado previamente, retornar
    // la información del usuario, caso contrario,retonar un objeto vacío.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
            dispatch({
              type: "persistLogin",
              payload: { user: user, loggedIn: true },
            });  
      } else {
        dispatch({
          type: "persistLogin",
          payload: { user: {}, loggedIn: false },
        });
      }
    });
  };

  const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "errorMessage", payload: "" });
  };

  
  export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signin,
        signout,    
        signup,
        persistLogin,
        clearErrorMessage,
    },
    {
      user: {},
      errorMessage: "",
      loggedIn: false,
      loading: true,
      registered: false,
    }
  );