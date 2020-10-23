import React, {useState} from 'react';
import './styles/main.scss';
import {
  Header,
  View,
  Pointer
} from "./scripts/components/index";
import slide1 from './images/slide-1.jpg'
import slide2 from './images/slide-2.jpg'
import slide3 from './images/slide-3.jpg'
import slide4 from './images/slide-4.jpg'
import slide5 from './images/slide-5.jpg'
import content from './mock/content.json'

function App() {
  const [activeView, setActiveView] = useState(0)
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
  ]
  const {view} = content

  return (
    <main className={`app active-view-${activeView}`}>
      <Header/>
      <View
        handleSetView={(view) => {setActiveView(view)}}
        slides={slides}
        activeView={activeView}
        viewContent={view}
      />
      <Pointer activeView={activeView}/>
    </main>
  );
}

export default App;
