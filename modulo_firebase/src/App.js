import { useState, useEffect } from 'react'
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'

import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"),(snapshot)=>{
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })

        setPosts(listaPost);
      })
    }

    loadPosts();
  }, [])


  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    // .then(() => {
    //   console.log("DADOS REGISTRADO NO BANCO!")
    // })
    // .catch((error) => {
    //   console.log("GEROU ERRO" + error)
    // }) 


    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO")
        setAutor('');
        setTitulo('')
      })
      .catch((error) => {
        console.log("ERRO " + error)
      })


  }


  async function buscarPost() {
    // const postRef = doc(db, "posts", "12345")

    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)

    // })
    // .catch(()=>{
    //   console.log("ERRO AO BUSCAR")
    // })

    const postsRef = collection(db, "posts");
    await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })

        setPosts(lista);

      })
      .catch((error) => {
        console.log("ERRO")
      })
  }

  async function editarPost(){
    const docRef = doc(db, "posts", idPost)

    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
    .then(()=>{
      console.log("post atualizado");

      setIdPost('');
      setAutor('');
      setTitulo('');
    })
    .catch(()=>{
      console.log("ERRO")
    })
  }

  async function ecluirPost(id){
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef)
    .then(()=>{
      console.log("Excluido com sucesso");
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1>

      <div className="container">

        <label>ID do post:</label>
        <input
        placeholder='Digite o ID do post'
        value={idPost}
        onChange={(e)=> setIdPost(e.target.value)}
        /> <br/>
        {/* qMVhNxqdNDznbsErljLs */}


        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder='Digite o titulo'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>

        <button onClick={editarPost}> Atualizar post</button>

        <ul>

          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br/>
                <span> Titulo: {post.titulo} </span> <br/>
                <span> Autor: {post.autor}</span> <br/>
                <button onClick={ ()=> ecluirPost(post.id) }>Excluir</button> <br/><br/>
              </li>
            )
          })}

        </ul>

      </div>

    </div>
  );
}

export default App;
