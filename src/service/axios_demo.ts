import axios from "axios";

// axios 实例对象
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res);
});

axios
  .get("http://httpbin.org/get", {
    params: {
      name: "Ryuuzaki",
      age: 1
    }
  })
  .then((res) => {
    console.log(res);
  });
