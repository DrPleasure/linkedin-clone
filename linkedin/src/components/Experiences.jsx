import { gettingExpOfUsers } from "../redux/actions/actionType";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Experiences = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.user.experiences);
  useEffect(() => {
    dispatch(gettingExpOfUsers());
  }, []);
  console.log(experiences);
  return (
    <>
      <div className="bg-light mt-3 rounded p-3">
        <h4>Experiences</h4>
        <ul class="list-group">
          <li class="list-group-item border-bottom transparent">
            <div className="d-flex align-items-start">
              <div className="mr-2">
                <img
                  src="https://avatars.githubusercontent.com/u/6154722?s=280&v=4"
                  className="mini-logos"
                />
              </div>
              <div>
                <p className="no-p-no-m">{experiences[0]?.company}</p>
                <p className="no-p-no-m text-muted">{experiences[0]?.role}</p>
                <p className="no-p-no-m text-muted text-smaller">
                  {experiences[0]?.description}
                </p>
                <p className="no-p-no-m text-muted">Sep 2022 - Now</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Experiences;
