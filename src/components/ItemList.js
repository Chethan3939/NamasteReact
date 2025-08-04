import {IMG_CDN_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const ItemList = ({items}) => {
    console.log('items',items)

    const dispatch = useDispatch();

    const handleAddItems = (item) =>{
        dispatch(addItems(item));
    }
    

   return (
    <div>
        {
        items.map((item)=>(

            <div  key={item.card.info.name} className="flex border-b-1 justify-between">
                <div className="text-left p-2 m-2 w-10/12"> 
                    <div  className="py-2 font-bold">{item.card.info.name}</div>
                    <div className="py-2 font-bold" > ₹{item.card.info.price/100 || item.card.info.defaultPrice / 100}</div>
                    <div className="py-2" >{item.card.info.description}</div>
                </div>
                <div className="w-2/12 h-auto">
                    <button className="flex justify-center items-center cursor-pointer bg-black text-white py-1 px-2 absolute rounded-lg shadow-lg" onClick={()=>handleAddItems(item)} >Add + </button>
                    <img className=" py-7" src={ IMG_CDN_URL + item.card.info.imageId}/>
                </div>
            </div>
                )            
            )
        }
    </div>
   );
}

export default ItemList;

