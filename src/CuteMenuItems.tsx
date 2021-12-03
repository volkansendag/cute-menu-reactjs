import { useEffect, useState } from 'react';
import './CuteMenuItems.css';
import CuteMenuItem, { OptionModelItem } from './CuteMenuItem';


const  CuteMenuItems=(options: {
  items: OptionModelItem[],
  onItemClick?: (item: OptionModelItem, evt: any) => void
}) =>{

    const [baseData,setBaseData] = useState<OptionModelItem[]>( );
    const [state, setstate] = useState(options.items);

    
  const onItemClick = (element?: OptionModelItem, evt?: any) => {
     
    console.log(evt, element);
    if(element?.text=="Geri"){
      setstate(options.items)
     
    } 
   else if(element && element.items)
    {
      debugger
      setBaseData(element?.items)
      if (element?.expanded) { 
        setstate( [{
          text: "Geri",
          visible: true,
          expanded: false,
          className: "fas fa-chevron-left",
          onClick: () => { 
          }
        }]);  
    }
    }
    
    
  }
     

  return (
    <ul className="cute-menu-body">
      {
        state.map((element, i) =>  <CuteMenuItem parentItem={baseData} key={i} element={element} onItemClick={onItemClick} />)
      
      }
       {
        baseData?.map((element, i) =>  <CuteMenuItem parentItem={baseData} key={i} element={element} onItemClick={onItemClick} />)
      
      }
    </ul >
  );
}

export default CuteMenuItems;
