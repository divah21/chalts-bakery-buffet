import { useUserContext } from "@/context/AuthContext";
import { useGetCurrentUser, useLikesPost } from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite"
import React, { useState, useEffect } from "react";

type PostStatsProps = {
    post: Models.Document;
    userId: string;
}

const PostStats = ({post, userId}: PostStatsProps) => {
    const likesList = post.likes.map((user:Models.Document) =>user.$id);

    const [likes, setLikes] = useState(likesList);
    const {mutate: likePost} = useLikesPost();

    const {data: currentUser} = useGetCurrentUser();

    const handleLikesPost = (e: React.MouseEvent) =>{
        e.stopPropagation();

        let newLikes = [...likes];

        const hasLiked = newLikes.includes(userId)

        if(hasLiked){
            newLikes = newLikes.filter((id: string) => id !== userId);
        }
        else{
            newLikes.push(userId);
        }

        setLikes(newLikes);
        likePost({postId: post.$id, likesArray: newLikes});
    }
  return (
    <div className="">
        <div className="flex gap-2 mr-5">
         <img
         src={checkIsLiked(likes, userId) ? 
            "/assets/icons/liked.svg"
            :"/assets/icons/like.svg"}
         alt="like"
         width={20}
         height={20}
         onClick={handleLikesPost}
         className="cursor-pointer"
         />
         <p className="small-medium lg:base-medium">{likes.length}</p>
        </div>

    </div>
  )
}

export default PostStats