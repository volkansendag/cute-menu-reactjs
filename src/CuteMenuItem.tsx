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


function CuteMenuItem(options: {
  element: OptionModelItem,
  parentItem?: OptionModelItem[],
  onItemClick?: (el?: any, evt?: any) => void
}) {


  const [expanded, setExpanded] = useState(false);

  const onItemClick = (evt?: any) => {

    setExpanded(!expanded);

    if (options.element.onClick) {
      options.element.onClick(options.element, evt);
    }


    if (options.onItemClick) {
      options.onItemClick(options.element, evt);
    }

    console.log(options);

  }


  return (
    options.element.visible ? <li>
      <a onClick={(evt) => (onItemClick(evt))}>
        <div>
          <i className={options.element.className}></i>
        </div>
        <div>{options.element.text}</div>
      </a>
      {
        options.element.items && expanded && <div className="cute-menu-sub-div">
          <CuteMenuItems items={options.element.items} />
        </div>
      }
    </li> : <></>
  );
}

export default CuteMenuItem;
