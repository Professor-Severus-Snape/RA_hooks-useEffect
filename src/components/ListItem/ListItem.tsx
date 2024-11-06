import IListItem from '../../models/IListItem';
import './listItem.css';

interface IItemProps {
  item: IListItem;
  itemClass: string;
  handleClick: (id: number) => void;
}

const Item = ({ item, itemClass, handleClick }: IItemProps) => {
  return (
    <li className={itemClass} onClick={() => handleClick(item.id)}>
      {item.name}
    </li>
  );
};

export default Item;
