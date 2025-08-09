import {getDocs,collection} from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import {db} from "../../config/firebase";
import { Post } from "./post";
//import { useAuthState } from "react-firebase-hooks/auth";

export interface IPost{
    id:string;
    userId:string;
    title:string;
    username:string;
    description:string;
}

export const Home=()=>{
    const [postList,setPostList]=useState<IPost[]|null>(null);
    const postRef=collection(db,"posts");
   // const [user]=useAuthState(auth);


    const getPosts=async ()=>{
        const data=await getDocs(postRef);
        setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})) as IPost[]);
    };

    useEffect(()=>{
        getPosts();
    });

    return <div> {postList?.map((post)=>(
        <Post post={post} />))}</div>
      
        
}