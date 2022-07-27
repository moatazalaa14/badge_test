import './App.css';
import {FacebookShareButton,FacebookIcon , LinkedinShareButton , LinkedinIcon} from "react-share"


function App() {
  
  
  return (
    <div className="App">
     
      <FacebookShareButton
        url={"https://res.cloudinary.com/djnchdgnz/image/upload/v1658875973/6d7b44c8-4417-40ed-80f4-e1bd6cc5290d_or7nk0.png"} /// url 
        quote={"Test Testtttttttt testtttttttttttt"} // 
        hashtag={"#Moataz"}
        description={"Finally I finished this course haha"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={80}  />
      </FacebookShareButton>
      <LinkedinShareButton
        url={"https://res.cloudinary.com/djnchdgnz/image/upload/v1658875973/6d7b44c8-4417-40ed-80f4-e1bd6cc5290d_or7nk0.png"} /// url 
        quote={"Test Testtttttttt testtttttttttttt"} // 
        hashtag={"#Moataz"}
        description={"Finally I finished this course haha"}
        className="Demo__some-network__share-button"
      >
        <LinkedinIcon size={80}  /> 
      </LinkedinShareButton>

     
    </div>
  );
}

export default App;
 