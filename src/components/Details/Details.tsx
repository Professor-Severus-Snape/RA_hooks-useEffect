import IDetails from '../../models/IDetails';
import './details.css';

interface IDetailsProps {
  data: IDetails;
}

const Details = ({ data }: IDetailsProps) => {
  const { avatar, name } = data;
  const { city, company, position } = data.details;

  // чтобы заставить реакт менять аватар при одной и той же ссылке на "https://i.pravatar.cc/300":
  const queryParam = `?key=${Math.random()}`;

  return (
    <div className="details">
      <img className="details__avatar" src={avatar + queryParam} alt="avatar" />
      <h3 className="details__description details__name">{name}</h3>
      <p className="details__description details__city">City: {city}</p>
      <p className="details__description details__company">Company: {company}</p>
      <p className="details__description details__position">Position: {position}</p>
    </div>
  );
};

export default Details;
