import { useEffect, useState } from 'react';
import './CuteMenu.css';
import CuteMenuItems from './CuteMenuItems';

export interface OptionModelItem {
  text: string;
  className: string;
  onClick?: (element?: OptionModelItem, evt?: any) => void;
  closeOnClick?: boolean;
  expanded?: boolean;
  visible?: boolean;
  items?: OptionModelItem[]
}


const CuteMenuItem=(options: {
  element: OptionModelItem,
  onItemClick?: (el?: any, evt?: any) => void
})=>{

  const [state, setstate] = useState(options.element);

  const onItemClick = (evt?: any) => {
    if (state) {

      state.expanded = !state.expanded;
      setstate(state);

      if (state.onClick) {
        state.onClick(options.element, evt);
      }


      if (options.onItemClick) {
        options.onItemClick(options.element, evt);
      }

      console.log(state);
    }
  }


  return (
    state.visible ? <li>
      <a onClick={(evt) => (onItemClick(evt))}>
        <div>
          <i className={state.className}></i>
        </div>
        <div>{state.text}</div>
      </a>
      {
        state.items && state.expanded && <div className="cute-menu-sub-div">
          <CuteMenuItems items={state.items} />
        </div>
      }
    </li> : <></>
  );
}

export default CuteMenuItem;
