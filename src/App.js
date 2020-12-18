import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return req;
    }

    fetchPosts();
  }, [input]);

  return (
    <div className="app">
      <h1>Lets build Full Stack</h1>
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
        <p>Test that this is updated</p>
      </div>
    </div>
  );
}

export default App;
