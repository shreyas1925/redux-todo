import React, { useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, removeAll } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

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
              placeholder=" Add your todos here"
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
                    onClick={() => dispatch(deleteItem(elem.id))}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => dispatch(removeAll())}
            >
              <span> CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
