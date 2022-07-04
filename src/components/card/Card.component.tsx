import { Component } from 'react';
import { User } from '../../App_functional_component';
import './Card.styles.css';

type MyProps = {
  user: User,
};

class Card extends Component<MyProps> {
  render() {
    const { name, email, id } = this.props.user;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=2&size=180x180`}
          alt={`user ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
