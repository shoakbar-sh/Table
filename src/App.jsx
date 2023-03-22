import React from "react";

const App = () => {
  return (
    <>
      <main>
        <section className="main">
          <div className="wrapper shadow w-1/2 mx-auto p-5">
            <h1 className="text-center text-2xl uppercase font-semibold text-white bg-sky-500 m-3">
              Task manager app
            </h1>

            <form action="#" className="m-3">
              <label htmlFor="title">
                <p>Enter task title</p>
                <input
                  id="title"
                  type="text"
                  className="border py-2 px-3 min-w-[450px] focus:ring-2 focus:outline-none"
                />

                <button className="bg-sky-600 py-2 px-3 mx-2 text-white focus:ring-2">
                  ADD
                </button>
              </label>
            </form>

            <div className="table-wrapper m-3 shadow p-5">
              <table className="table-auto w-full text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border">
                    <td>1</td>
                    <td>Lorem ipsum dolor</td>
                    <td>
                      <button className="bg-red-600 py-1 px-2 mx-2 uppercase text-white focus:ring-2">
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
