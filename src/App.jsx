import React, {useState} from "react";
import Header from "./Header"
import Search_bar from "./Search_bar"
import LoginButton from "./LoginButton"
import OptionsButtons from "./OptionsButtons"
import ImageSlider from "./ImageSlider";

function App() {
  const [name, setName] = useState("Guest");

  const slides = [
    {url: "https://static.vecteezy.com/system/resources/previews/009/302/805/non_2x/silhouette-landscape-with-fog-forest-pine-trees-mountains-illustration-of-national-park-view-mist-black-and-white-good-for-wallpaper-background-banner-cover-poster-free-vector.jpg"},
    {url: "https://images.unsplash.com/photo-1559580148-d691e9c43d79?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8SVBnR3ZzYkVsMlF8fGVufDB8fHx8fA%3D%3D"},
    {url: "https://i.pinimg.com/originals/4a/5d/6f/4a5d6f5bdb662a8897ca89d276f975eb.jpg"}
  ]

  const slideHolder = {
    position: 'absolute',
    width: '900px',
    height: '560px',
    marginTop: '12vh'
  }

  return (
    <>
      <Header name={name}/>
      <Search_bar/>
      <LoginButton/>
      <OptionsButtons setName={setName}/>
      <div style={slideHolder}>
        <ImageSlider slides={slides}/>
      </div>
    </>
  )
}

export default App
