import IDetails from '../../models/IDetails';
import './details.css';

interface IDetailsProps {
  data: IDetails;
}

const Details = ({ data }: IDetailsProps) => {
  const { avatar, name } = data;
  const { city, company, position } = data.details;

  return (
    <div className="details">
      <img className="details__avatar" src={avatar} alt="avatar" />
      <h3 className="details__description details__name">{name}</h3>
      <p className="details__description details__city">City: {city}</p>
      <p className="details__description details__company">Company: {company}</p>
      <p className="details__description details__position">Position: {position}</p>
    </div>
  );
};

export default Details;
