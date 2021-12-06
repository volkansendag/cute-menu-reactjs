import { useEffect, useState } from 'react';
import './CuteMenuItems.css';
import CuteMenuItem, { OptionModelItem } from './CuteMenuItem';


const CuteMenuItems = (options: {
  items: OptionModelItem[],
  onItemClick?: (item: OptionModelItem, evt: any) => void
}) => {

  const [baseData, setBaseData] = useState<OptionModelItem[]>();
  const [state, setstate] = useState(options.items);


  const onItemClick = (element?: OptionModelItem, evt?: any) => {

  }


  return (
    <ul className="cute-menu-body">
      {
        state.map((element, i) => <CuteMenuItem parentItem={baseData} key={i} element={element} onItemClick={onItemClick} />)
      }
    </ul >
  );
}

export default CuteMenuItems;
