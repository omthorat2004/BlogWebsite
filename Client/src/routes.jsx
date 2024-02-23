import Author from "./features/Author/Components/Author";
import AuthorProfile from "./features/Author/Components/AuthorProfile";
import Blogs from "./features/Home/Components/Blogs";
import Home from "./features/Home/Components/Home";
import ProfileCard from "./features/UserProfile/Components/Card";
import UserProfile from "./features/UserProfile/Components/UserProfile";


export const publicRoutes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/authors',
        element:<Author/>
    },
    {
        path:'/author/:id',
        element:<AuthorProfile/>
    },
    {
        path:'/home',
        element:<Home/>
    },
]

export const privateRoutes = [
    {
        path:'/profile',
        element:<UserProfile children={<ProfileCard/>}/>
    },
    {
        path:'/profile/blogs',
        element:<UserProfile children={<Blogs/>}/>
    },
    {
        path:'/profile/like',
        element:<UserProfile children={<Blogs/>}/>
    },
      {
        path:'/profile/following',
        element:<UserProfile children={<Author/>}/>
    },
    {
        path:'/profile/bookmarks',
        element:<UserProfile children={<Blogs/>}/>
    }
]