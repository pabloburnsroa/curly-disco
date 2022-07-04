import Card from '../card/Card.component';
import { User } from '../../App_functional_component';

type CardListProps = {
  users: User[];
};
const CardListFunctional = ({ users }: CardListProps) => (
  <div className="card-list">
    {users.map((user) => {
      return <Card user={user} key={user.id} />;
    })}
  </div>
);

export default CardListFunctional;
