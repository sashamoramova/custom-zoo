import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StartPage from "../Pages/StartPage/StartPage";
import PricePage from "../Pages/PricePage/PricePage";
import SignInPage from "../Pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../Pages/SignUpPage/SignUpPage.jsx";
import ImagePage from "../Pages/ImagePage/ImagePage";
import AnimalsPage from "../Pages/AnimalsPage/AnimalsPage";
import { useEffect, useState } from "react";
import { setAccessToken } from "../Shared/lib/axiosInstance.js"
import UserApi from "../Entites/Users/UserApi.js";
import Layout from "../Widgets/Layout/Layout.jsx";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    UserApi.refreshTokens()
      .then(({ error, data, statusCode }) => {
        if (error) {
          setUser(null);
          return;
        }
        if (statusCode === 200) {
          setAccessToken(data.accessToken);
          setUser(data.user);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        { 
          path: "/",
          element: <StartPage /> 
        },
        { 
          path: "/animals", 
          element: <AnimalsPage user={user} setUser={setUser} /> 
        },
        {
          path: "/price", 
          element: <PricePage setUser={setUser} /> 
        },
        { 
          path: "/signIn", 
          element: <SignInPage setUser={setUser} /> 
        },
        { 
          path: "/signUp", 
          element: <SignUpPage setUser={setUser} /> 
        },
        { 
          path: "/image", 
          element: <ImagePage setUser={setUser} /> 
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
