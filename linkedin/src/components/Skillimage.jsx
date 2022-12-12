import { MdPeopleAlt } from "react-icons/md";
const Skillimage = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <img
          src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/EPICODE-pitto-color.png"
          className="mini-logos mr-3 "
        />
        <p className="no-p-no-m">EPICODE</p>
      </div>
      <div>
        <p className="text-muted mt-1">
          <MdPeopleAlt size={20} /> 5 Endorsements
        </p>
      </div>
    </>
  );
};
export default Skillimage;
