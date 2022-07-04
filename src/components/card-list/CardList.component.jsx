import { Component } from 'react';
import Card from '../card/Card.component';

class CardList extends Component {
  render() {
    // console.log(this.props.monsters);
    const { users } = this.props;

    return (
      <div className="card-list">
        {users.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
