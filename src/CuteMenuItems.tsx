import { useState } from 'react';
import './CuteMenu.css';
import CuteMenuItem, { OptionModelItem } from './CuteMenuItem';



function CuteMenuItems(options: {
  items: OptionModelItem[],
  onItemClick?: (item: OptionModelItem, evt: any) => void
}) {

  // const [state, setstate] = useState(options.items);

  const onItemClick = (element?: OptionModelItem, evt?: any) => {
    console.log(evt, element);
    if (element?.expanded) {
      // setstate([{
      //   text: "Geri",
      //   className: "fas fa-thumbtack",
      //   onClick: (opt: any) => {
      //     // setstate(options.items);
      //     console.log(opt);
      //   }
      // }])
    }
  }

  return (
    <ul className="cute-menu-body">
      {
        options.items.map((element, i) => <CuteMenuItem key={i} element={element} onItemClick={onItemClick} />)
      }
    </ul >
  );
}

export default CuteMenuItems;
