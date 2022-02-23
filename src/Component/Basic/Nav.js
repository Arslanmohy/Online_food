import React from "react";

const Nav = ({ filterItem, categoryList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {categoryList.map((current) => {
            return (
              <button
                type=""
                className="btn-group__item"
                key={current}
                onClick={() => {
                  filterItem(current);
                }}
              >
                {current}
              </button>
            );
          })}

          {/* <button
            type=""
            className="btn-group__item"
            onClick={() => {
              filterItem("lunch");
            }}
          >
            Lunch
          </button>
          <button
            type=""
            className="btn-group__item"
            onClick={() => {
              filterItem("evening");
            }}
          >
            Evening
          </button>
          <button
            type=""
            className="btn-group__item"
            onClick={() => {
              filterItem("dinner");
            }}
          >
            Dinner
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
