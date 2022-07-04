// import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

import CardListFunctional from './components/card-list/CardListFunctional.component';

import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

export type User = {
  id: string;
  name: string;
  email: string;
};

// Functional Component
const AppFunctionalComponent = () => {
  // React is running the functional component whenever it needs to re-render
  // React will check if the searchField value has changed, only then will it re-render
  const [searchField, setSearchField] = useState(''); // [Value, setValue]
  const [title, setTitle] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  console.log('Rendered');

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setUsers(users));

    const fetchUsers = async () => {
      const users = await getData<User[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="user-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search-users"
      />
      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="change-title"
      />

      {/* <CardList users={filteredUsers} /> */}
      <CardListFunctional users={filteredUsers} />
    </div>
  );
};

export default AppFunctionalComponent;
