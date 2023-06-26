import { Widget, isWidgetOpened } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import "./App.css";

//This is the image component, copy it to your project

function App() {
  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        onClick={() => console.log(isWidgetOpened)}
        handleToggle={(toggleStatus: any) => {
          if (toggleStatus) {
            window.parent.postMessage("true", "*");
          } else window.parent.postMessage("false", "*");
        }}
      />
    </div>
  );
}

export default App;
