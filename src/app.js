import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About'
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './components/utils/UserContext';

// const h1=document.createElement("h1");
// h1.innerHTML="Hello World!";
// const root=document.getElementById("root");
// root.appendChild(h1);

// const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Hello Child1"),React.createElement("h2",{},"Iam h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Hello Child2"),React.createElement("h2",{},"Iam h2 tag")])]);


// const heading=<h1>Hello World from JSX!</h1>

// const root1=ReactDOM.createRoot(document.getElementById("header"));

// root1.render(heading);

const Grocery=lazy(()=>import('./components/Grocery'))
const About=lazy(()=>import('./components/About'))

const App=()=>{
    const [userName,setUserName]=useState()
    useEffect(()=>{
        const data={
            name:"Venkatesh"
        }
        setUserName(data.name)
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className='app'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}

const router=createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            path:'/',
            element:<Body/>
        },
        {
            path:"/about",
            element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/restaurant/:id',
            element:<RestaurantMenu/>
        },
        {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        }
    ],
    errorElement:<Error/>
}])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
