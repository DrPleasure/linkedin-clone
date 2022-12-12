import { MdPeopleAlt } from "react-icons/md";
const Skillimage = () => {
  return (
    <div>
      <img
        src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1045/original/EPICODE-pitto-color.png"
        className="mini-logos"
      />
      <p className="text-muted mt-1">
        <MdPeopleAlt size={20} /> 5 Endorsements
      </p>
    </div>
  );
};
export default Skillimage;
