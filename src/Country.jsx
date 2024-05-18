import PropTypes from "prop-types";

import { useParams } from "react-router-dom";

export function Country() {
  let { countryname } = useParams();
  console.log(countryname);
  return (
    <div>
      <h2>Country</h2>
    </div>
  );
}

Country.propTypes = {
  countryname: PropTypes.string.isRequired,
};
