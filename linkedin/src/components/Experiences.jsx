const Experiences = () => {
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
                <p className="no-p-no-m"> Microsoft</p>
                <p className="no-p-no-m text-muted">Software Engineer</p>
                <p className="no-p-no-m text-muted">Sep 2022 - Now</p>
              </div>
            </div>
          </li>
          <li class="list-group-item border-bottom transparent">
            {" "}
            <div className="d-flex align-items-start">
              <div className="mr-2">
                <img
                  src="https://avatars.githubusercontent.com/u/6154722?s=280&v=4"
                  className="mini-logos"
                />
              </div>
              <div>
                <p className="no-p-no-m"> Microsoft</p>
                <p className="no-p-no-m text-muted">Web Dev</p>
                <p className="no-p-no-m text-muted">2019 - 2022</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Experiences;
