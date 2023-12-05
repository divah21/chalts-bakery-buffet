"use client"
import { INewPost, INewUser } from "@/types/utils";
import { ID, avatars, databases, storage } from "./config";
import { account } from "./config";
import { Client, Query } from "appwrite";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      email: newAccount.email,
      userName: user.username,
      name: newAccount.name,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  userName?: string;
  imageUrl: URL;
}) {
  try {
    const newUser = await databases.createDocument(
      "65499b98e8a941e496e2",
      "65499d02adccd9059d2b",
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      "65499b98e8a941e496e2",
      "65499d02adccd9059d2b",
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(post: INewPost) {
  try {
    //upload image to storage
    const uploadedFile = await uploadFile(post.file[0]);

    if (!uploadedFile) throw Error;

    //get file Url

    const fileUrl = getFilePreview(uploadedFile.$id);

    if (!fileUrl) {
      deleteFile(uploadedFile.$id);
      throw Error;
    }

    // Convert tags in an array
    const tags = post.tags?.replace(/ /g, "").split(",") || [];

    // Save post to database
    const newPost = await databases.createDocument(
      "65499b98e8a941e496e2",
      "65499fe8db70a7d8e42c",
      ID.unique(),
      {
        creator: post.userId,
        caption: post.caption,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        price: post.price,
        tags: tags,
      }
    );
    if (!newPost) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    return newPost;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(file: File) {
  try {
    const uploadedFile = await storage.createFile(
      "654562ad5f12e319f6e9",
      ID.unique(),
      file
    );

    return uploadedFile;
  } catch (error) {
    console.log(error);
  }
}

export function getFilePreview(fileId: string) {
  try {
    const fileUrl = storage.getFilePreview(
      "654562ad5f12e319f6e9",
      fileId,
      2000,
      2000,
      "top",
      100
    );

    return fileUrl;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFile(fileId: string) {
  try {
    await storage.deleteFile("654562ad5f12e319f6e9", fileId);

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentPosts() {
  const posts = await databases.listDocuments(
    "65499b98e8a941e496e2",
    "65499fe8db70a7d8e42c",
    [Query.orderDesc("$createdAt"), Query.limit(30)]
  );

  if (!posts) throw Error;

  return posts;
}

export async function getPostById(postId: string) {
  try {
    const post = await databases.getDocument(
      "65499b98e8a941e496e2",
      "65499fe8db70a7d8e42c",
      postId
    );

    return post;
  } catch (error) {
    console.log(error);
  }
}
export async function getSimilarPosts(product: string) {
  try {
    const post = await databases.getDocument(
      "65499b98e8a941e496e2",
      "65499fe8db70a7d8e42c",
      product
    );

    if(!post) return null;

    const similarProduct = await databases.listDocuments(
      "65499b98e8a941e496e2",
      "65499fe8db70a7d8e42c",
      [Query.orderDesc("$createdAt"), Query.limit(3)]
    );

    return similarProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function likePost(postId:string, likesArray: string[]) {
  try {
const updatedPost = await databases.updateDocument(
  "65499b98e8a941e496e2",
  "65499fe8db70a7d8e42c",
  postId,
  {
    likes: likesArray
  }
)
if(!updatedPost) throw Error;
return updatedPost
  } catch (error) {
    console.log(error);
  }
  
}
