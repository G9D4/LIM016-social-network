import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { db } from "../firebase/firebase-initializer.js";
import { auth } from "../firebase/firebase-auth.js";

/******************Agrega un post a FS*********************/
const colRef = collection(db, "posts");

export function addPost(message) {
  const user = auth.currentUser;

  console.log(user);
  console.log("entramos a AddPost");
  addDoc(colRef, {
    id_user: user.uid,
    user_name: user.displayName,
    message,
    date: Date.now(),
    likes: [],
  })
    .then(() => {
      console.log("post subido al firestore!");
    })
    .catch((err) => console.log(err));
}

/******************Agrega un usuario a FS*********************/
const userRef = collection(db, "users");

export function addUser(user, name, password) {
  let nuevoName;
  if (!user.displayName) {
    nuevoName = name;
  } else {
    nuevoName = user.displayName;
  }

  console.log("entramos a AddUsers");

  const userdoc = doc(db, "users", user.uid); //Creamos un documento con el id de nuestro usuario

  // setDoc lo usamos para especificar un id único que nosotros vamos a colocarle,
  // El addDoc autogenera el id

  return setDoc(userdoc, {
    user_id: user.uid,
    user_name: nuevoName,
    date_creation: Date.now(),
    user_email: user.email,
    user_password: password,
    user_date: "",
    user_createdAt: user.metadata.createdAt,
  })
    .then(() => {
      console.log("usuario subido al firestore!");
    })
    .catch((err) => console.log(err));
}

// El addDoc no me importa el id que se genere,
// en el usuario el id deberia ser igual que el del servicio de autentificación, por eso usamos doc (para que sea único)

// ------------------------------
// * OBTENEMOS LA COLECCIÓN

/******************Recopila todos los posts*********************/

export async function traerPost() {
  const postsData = [];

  const postsRef = collection(db, "posts");

  const querySnapshotPosts = await getDocs(postsRef);
  // const querySnapshotPosts = await getDocs(postsRef).orderBy("date", "asc");

  // const query = await db.collection("posts")
  // .orderBy("name", "asc")
  // .get();

  // querySnapshotPosts.forEach((querySnapshot) =>
  //   console.log(querySnapshot.data().name)
  // );

  querySnapshotPosts.forEach((doc) => {
    const post = doc.data();
    console.log(post);
    post["post_id"] = doc.id;

    console.log(post);

    postsData.push(post);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });

  return postsData;
}

export async function toggleLikes(post_id) {
  // console.log(post.post_id);

  console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const postRef = doc(db, "posts", post_id); // documentRef

  console.log("este es postRef", postRef);
  const userId = auth.currentUser.uid;
  console.log(userId);

  const post = await getDoc(postRef);
  const likes = post.data().likes;
  const userLike = likes.find((like) => {
    //.find defines true o false hasta q las entencia se cumple
    return like === userId;
  });

  if (userLike) {
    await updateDoc(postRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(postRef, {
      likes: arrayUnion(userId),
    });
  }

  // jalar posts de determinado usuario para armar muro perfil

  // const q1 = query(
  //       collection(db, "posts"),
  //       where("id_user", "==", userId)
  //     );

  // const querySnapshotPosts = await getDocs(q1)

  // const postsFiltradocs = querySnapshotPosts.docs // esto es un array SIEMPRE

  // const likesDelPrimerPostFiltrado = postsFiltradocs[0].data().likes // []
  // const idDelPrimerPostFiltrado = postsFiltradocs[0].id //
}

export function initListenerPost(postId, actualizarPost) {
  return onSnapshot(doc(db, "posts", postId), actualizarPost);
}

// ---------------Funciones del post -------------------------------

// Actualizar post
export async function updatePost(post_id, newMessage) {
  const postRef = doc(db, "posts", post_id);

  return await updateDoc(postRef, {
    message: newMessage,
  });
}

// Eliminar post

export async function deletePost(post_id) {
  const postRef = doc(db, "posts", post_id);

  return await deleteDoc(postRef);
}

export async function getUserData(user_id) {
  const userRef = doc(db, "users", user_id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return await docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function checkRegisteredUser(post_id) {
  const userRef = doc(db, "users", post_id);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log("pues si existe este usuario en firestore!");
    return await docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
