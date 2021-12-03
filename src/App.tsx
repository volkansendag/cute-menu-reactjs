import './App.css';
import CuteMenu from './CuteMenu';

const items = [
  {
  text: "Volkan",
  visible: true,
  expanded: false,
  className: "fas fa-thumbtack",
  onClick: (opt: any) => {
    console.log(opt);
  }
}, {
  text: "Tayfun",
  visible: true,
  expanded: false,
  className: "fas fa-thumbtack",
  onClick: (evt: any) => {
    console.log(evt)
  }
}, {
  text: "Nedir",
  visible: true,
  expanded: false,
  className: "fas fa-thumbtack",
  items: [{
  text: "Hesabın",
  visible: true,
  expanded: false,
  className: "fas fa-thumbtack",
    onClick: (evt: any) => {
      console.log(evt)
    }
  }, {
    text: "Ayarlar",
    visible: true,
  expanded: false,
  className: "fas fa-thumbtack",
    onClick: (evt: any) => {
      console.log(evt)
    }
  }],
}];

const App =()=> { 
  return ( 
    <div className="App">
      <CuteMenu items={items} />
    </div>
  );
};
export default App;
