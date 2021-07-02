import React, { useState, useEffect } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, removeAll } from "../actions/index";

//   to set data from localstorage

// const getLocalItems = () => {
//   let list = localStorage.getItem("lists");

//   // here i am getting just strings values

//   console.log(list);

//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <i class="fas fa-shopping-cart shopping"></i>

          <figure>
            <figcaption></figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder=" Add products here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Update Item"
              onClick={() => {
                dispatch(addItem(inputData), setInputData(""));
              }}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>

                  <i
                    className="far fa-trash-alt test-class"
                    title="Delete Item"
                    onClick={() => {
                      dispatch(deleteItem(elem.id));
                    }}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
