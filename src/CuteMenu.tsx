import { useState } from 'react';
import './CuteMenu.css';
import { OptionModelItem } from './CuteMenuItem';
import CuteMenuItems from './CuteMenuItems';


export interface OptionModel {
  items: OptionModelItem[]
  // initButton: HTMLButtonElement
}


function CuteMenu(options: OptionModel) {

  const [visible, setVisible] = useState(false);

  const onInitButtonClick = () => {
    setVisible(!visible);
  }

  const onItemClick = (element?: OptionModelItem, evt?: any) => {
    console.log(evt);
  }

  return (
    <div className="cute-menu-ctrl">
      <div onClick={onInitButtonClick} className="icon">
        <i className="fas fa-th"></i>
      </div>
      {visible && <CuteMenuItems items={options.items} onItemClick={(item, evt) => onItemClick(item, evt)} />
      }
    </div >
  );
}

export default CuteMenu;
