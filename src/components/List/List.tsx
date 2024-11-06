import Item from '../ListItem/ListItem';
import IListItem from '../../models/IListItem';
import './list.css';

interface IListProps {
  data: IListItem[];
  activeId: number;
  handleClick: (id: number) => void;
}

const List = ({ data, activeId, handleClick }: IListProps) => {
  const items = data.map((item) => (
    <Item
      key={item.id}
      item={item}
      itemClass={item.id === activeId ? 'list__item list__item_active' : 'list__item'}
      handleClick={handleClick}
    />
  ));

  return <ul className="list">{items}</ul>;
};

export default List;
