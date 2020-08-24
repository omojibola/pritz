import * as actions from "./actionTypes";

// adda note

export const addNote = (data) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.ADD_NOTE_START });

  try {
    const res = await firestore.collection("notes").doc(userId).get();
    const newNote = {
      id: new Date().valueOf(),
      note: data.note,
    };
    if (!res.data()) {
      firestore
        .collection("notes")
        .doc(userId)
        .set({
          notes: [newNote],
        });
    } else {
      firestore
        .collection("notes")
        .doc(userId)
        .update({
          notes: [...res.data().notes, newNote],
        });
    }

    dispatch({ type: actions.ADD_NOTE_SUCCESS });
    return true;
  } catch (error) {
    dispatch({ type: actions.ADD_NOTE_FAIL, payload: error.message });
  }
};
