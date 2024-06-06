import React from "react";
import Chef from "./icons_assets/chef.webp";
import Tables from "./icons_assets/Tables.webp";

export default function About() {
  return (
    <section className="about mt-2" id="about">
      <div className="container m-0 p-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <h1> Little Lemon Restaurant</h1>
            <h2>Rayagada</h2>
            <div className="">
              <img
                className="img-fluid mx-auto d-sm-none rounded-4"
                src={Chef}
                alt="Delicius Dish in Little Lemon Restaurant"
                width={350}
              />
            </div>
            <p className="mt-2">
              {" "}
              Little Lemon Restaurant is a cozy eatery tucked away on a quaint street corner, known for its delightful fusion of flavors and warm ambiance. The restaurant has garnered a loyal following for its creative dishes that blend traditional recipes with innovative twists, all centered around the vibrant citrusy essence of lemons.
            </p>
            <p>
              {" "}
              Patrons often praise the charming atmosphere of the restaurant, which features cozy seating arrangements and welcoming decor. Whether you're dining alone, enjoying a romantic evening with a loved one, or hosting a gathering with friends, Little Lemon provides the perfect backdrop for memorable dining experiences.

Overall, Little Lemon Restaurant stands out as a hidden gem in the culinary scene, offering a delightful combination of inventive cuisine, friendly service, and a cozy ambiance that keeps guests coming back for more.
            </p>
          </div>
          <div className="col-md-5 d-md-block d-none">
            <div className="tables-chef position-relative">
              <img
                className="position-absolute img-fluid top-50 start-0 mb-5 rounded-4"
                src={Chef}
                alt="View of the Restaurant"
                width={250}
              />
              <img
                className="position-absolut img-fluid mt-2 rounded-4"
                src={Tables}
                alt="Delicius Dish in Little Lemon Restaurant"
                width={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
