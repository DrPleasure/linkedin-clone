import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarTop from "./NavbarTop";
import { getOtherProfile } from "../redux/actions/actionType";

function Searchbar({ user }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");


  const params = useParams();



  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleFilter(query);
  }, [query]);

  const handleFilter = (query) => {
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase());
    });

    if (query.length > 0) {
      setFilteredData(newFilter);
    } else {
      setFilteredData([]);
    }
  };

  const onInputClick = () => {
    console.log(user.id);
    
  };

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile/" + {userid});
  };

  const fetchData = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/";

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk3MjZmOWM5NmRmYjAwMTUyMWE1Y2QiLCJpYXQiOjE2NzA4NzIxOTksImV4cCI6MTY3MjA4MTc5OX0.yvOTDhvjHOMjzOljbQSy14jHPbW8thYnr5ZABpcn5W4",
        },
      });

      if (response.ok) {
        const data = await response.json();
        

        setData(data);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };


  console.log(data)
  const userid = params.userid
  console.log("user id:", userid)

  return (
    <div>
      <div className="header__search">
        <InputGroup
          onClick={() => onInputClick()}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        >
          <Form.Control placeholder="Search" />
        </InputGroup>
      </div>

      {filteredData.length !== 0 && (
        <div
          style={{
            position: "fixed",
            zIndex: "3",
          }} /* style={{marginTop: '33rem'}} */
        >
          {filteredData.slice(0, 10).map((data) => {
            return (
              <ListGroup key={data.id} className="search-list">
                <div>
                  <Link
                    onClick={(getOtherProfile) => {
                      setQuery("");
                      setFilteredData([]);
                    }}
                    to={"/Profile/" + data._id}
                  >
                    <ListGroup.Item
                      style={{
                        textAlign: "left",
                      }}
                      onClick={() => {
                        onInputClick(true);
                      }}
                    >
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                        src={data.image}
                        alt=""
                      />
                      <span
                        className="ml-2"
                        style={{ color: "black", fontSize: "14px" }}
                        onClick={goToProfile}
                      >
                        <strong>{data.name}</strong>
                      </span>
                    </ListGroup.Item>
                  </Link>
                </div>
              </ListGroup>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
