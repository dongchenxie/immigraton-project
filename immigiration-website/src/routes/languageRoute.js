/*
 * @Author: Dongchen Xie
 * @Date: 2020-10-12 08:21:44
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-10-12 18:18:18
 * @Description: file contentwer
 */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import useStore from "../zustand/zustand"
import Home from "../pages/Home"
import About from "../pages/About"
import Service from "../pages/Service"
import Blog from "../pages/Blog"
import Contact from "../pages/ContactUs"
// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
        <Switch>
          <Route path="/:lang" children={<Child />} />
          <Route path="/" children={<Redirect to={"/en"}/>}/>
        </Switch>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let {lang} = useParams();
  let { path, url } = useRouteMatch();
  const setLanguage = useStore(s=>s.setLanguage)
  React.useEffect(()=>{
    setLanguage(lang)
  },[lang])
  return (
    <Switch>
       <Route path={`${url}/contact`} children={<Contact/>} />
       <Route path={`${url}/blog`} children={<Blog/>} />
   
      <Route path={`${url}/service`} children={<Service/>} />
      <Route path={`${url}/about`} children={<About/>} />
          <Route path={`${url}/`} children={<Home/>} />
        </Switch>
  );
}
