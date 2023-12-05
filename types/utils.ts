export type INavLink ={
    imgUrl: string;
    route: string;
    label: string;
};
 
export type IUser ={
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;

};

export type INewUser ={
    name: string;
    email: string;
    username: string;
    password: string;
};

export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    price?: string;
    tags?: string;
  };

export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string;
  };

export type IContextType ={
    user: IUser;
    isPending: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () =>Promise<boolean>;
}