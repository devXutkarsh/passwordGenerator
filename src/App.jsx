import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const  passGenerator = useCallback(()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (number) str += "01234567890";
    if (char) str += "!@#$%^&*)(";
    for (let i = 1; i < length; i++) {
      let randomPassword = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomPassword);
    }
    setpassword(pass);

  }, [setpassword, length, number, char])

// const usefect=  useEffect(() => {
//     passGenerator();
//   },  [setpassword, length, number, char]);

  return (
    <div className="bg-black w-ful h-screen flex justify-center items-center flex-col">
      <h1 className="capitalize text-4xl font-semibold text-white">
        password generator
      </h1>

      <input
        type="text "
        className="py-2 px-[4vw] my-2 rounded-lg bg-gray-300"
        value={password}
        readOnly
      />
      <div className=" flex flex-col w-[50%] justify-center items-center">
        <p className="text-white ">
          length: {length} <br></br>
          <input type="range" className="w-[20vw] "  
          max={100}
          min={8}
          value={length}
          onChange={(e) => {setlength(e.target.value)}}/>
        </p>
      </div>
      <div className="flex w-[20%] flex-col">
        <p className="text-gray-600 mr-auto  w-[20%]">settings</p>
        <div className="bg-[#2c2c2e] capitalize p-2 text-white my-3">
          <p className="">
            number allowed
            <span className="ml-[50%]">
              <input type="checkbox" className="" 
              defaultValue={number}
              onChange={()=> {setnumber((prev)=> !prev)}}/>
            </span>
          </p>
        </div>
        <div className="bg-[#2c2c2e] capitalize p-2 text-white">
          <p className="">
            char allowed
            <span className="ml-[58%]">
              <input type="checkbox" className="inputEle"
               defaultValue={char}
               onChange={()=> {setchar((prev)=> !prev)}} />
            </span>
          </p>
        </div>

        <button className="bg-white p-3 rounded-lg mt-3" 
        onClick={passGenerator}>
          password generate
        </button>
      </div>
    </div>
  );
}

export default App;
