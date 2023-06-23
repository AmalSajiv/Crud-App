import React, { Fragment, useState } from "react";
import "./App.css";
import { Dialog, Transition } from "@headlessui/react";

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    const newItem = {
      id: id,
      name: name,
      age: age,
    };
    setData([...data, newItem]);
    setId("");
    setName("");
    setAge("");
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">CRUD APP</h2>

      <div className="py-10">
        <button
          type="button"
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="flex mx-auto text-center justify-end">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-[999999]"
            onClose={toggleModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 sm:top-[18%]  z-10 overflow-y-auto">
              <div className="flex min-h-full[x] h-screen sm:h-auto w-xl items-end justify-center p-4[x] text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="flex w-full h-full transform text-left text-base transition md:my-4 md:max-w-3xl md:px-4 lg:h-[590px] lg:max-w-xl">
                    
                    <form className="mb-4">
                    <p
                      className="text-xl font-bold text-right text-custom_black-900 mt-1 ml-80 hover:cursor-pointer"
                      onClick={toggleModal}
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M13.4099 12.0002L19.7099 5.71019C19.8982 5.52188 20.004 5.26649 20.004 5.00019C20.004 4.73388 19.8982 4.47849 19.7099 4.29019C19.5216 4.10188 19.2662 3.99609 18.9999 3.99609C18.7336 3.99609 18.4782 4.10188 18.2899 4.29019L11.9999 10.5902L5.70994 4.29019C5.52164 4.10188 5.26624 3.99609 4.99994 3.99609C4.73364 3.99609 4.47824 4.10188 4.28994 4.29019C4.10164 4.47849 3.99585 4.73388 3.99585 5.00019C3.99585 5.26649 4.10164 5.52188 4.28994 5.71019L10.5899 12.0002L4.28994 18.2902C4.19621 18.3831 4.12182 18.4937 4.07105 18.6156C4.02028 18.7375 3.99414 18.8682 3.99414 19.0002C3.99414 19.1322 4.02028 19.2629 4.07105 19.3848C4.12182 19.5066 4.19621 19.6172 4.28994 19.7102C4.3829 19.8039 4.4935 19.8783 4.61536 19.9291C4.73722 19.9798 4.86793 20.006 4.99994 20.006C5.13195 20.006 5.26266 19.9798 5.38452 19.9291C5.50638 19.8783 5.61698 19.8039 5.70994 19.7102L11.9999 13.4102L18.2899 19.7102C18.3829 19.8039 18.4935 19.8783 18.6154 19.9291C18.7372 19.9798 18.8679 20.006 18.9999 20.006C19.132 20.006 19.2627 19.9798 19.3845 19.9291C19.5064 19.8783 19.617 19.8039 19.7099 19.7102C19.8037 19.6172 19.8781 19.5066 19.9288 19.3848C19.9796 19.2629 20.0057 19.1322 20.0057 19.0002C20.0057 18.8682 19.9796 18.7375 19.9288 18.6156C19.8781 18.4937 19.8037 18.3831 19.7099 18.2902L13.4099 12.0002Z"
                          fill="black"
                        />
                      </svg>
                    </p>
                      <label className="block mb-2">
                        ID:
                        <input
                          type="text"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                          className="border border-gray-300 px-2 py-1 ml-9 rounded"
                        />
                      </label>
                      <label className="block mb-2">
                        Name:
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border border-gray-300 px-2 py-1 ml-2 rounded"
                        />
                      </label>
                      <label className="block mb-2">
                        Age:
                        <input
                          type="text"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          className="border border-gray-300 px-2 py-1 ml-5 rounded"
                        />
                      </label>
                      <div toggleModal={toggleModal} onClick={toggleModal} className="py-10">
                        <button
                          type="button"
                          onClick={handleAdd}
                          className="bg-blue-500 text-white px-4 py-2 ml-40 rounded hover:bg-blue-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                    
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      <div className="flex flex-col items-center">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="w-1/3 border text-center text-sm font-light dark:border-neutral-500">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="border-b">
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Age
                    </th>
                  </tr>
                  <tr className="border-b">
                    <td className="border-r px-6 py-4">1</td>
                    <td className="border-r px-6 py-4">Amal</td>
                    <td className="border-r px-6 py-4">23</td>
                  </tr>
                  <tr>
                    <td className="border-r px-6 py-4">2</td>
                    <td className="border-r px-6 py-4">Naveen</td>
                    <td className="border-r px-6 py-4">27</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b font-medium dark:border-neutral-500"
                    >
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        {item.id}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        {item.age}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
