import { gettingAllUsers } from "../redux/actions/actionType";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FilterUsers() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(gettingAllUsers());
  }, []);

  // 👇️ filter with 1 condition
  const filtered = users.filter((users) => {
    return users.name === "Stefano";
  });
  // 👇️ [{id: 1, name: 'Alice', country: 'Canada'},
  //     {id: 3, name: 'Carl', 'country: 'Canada'}]

  return (
    <div>
      {filtered.map((users) => {
        return (
          <div key={users.id}>
            <h2>name: {users.name}</h2>
            <h2>last name: {users.surname}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
