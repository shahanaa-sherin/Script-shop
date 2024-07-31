import axios from "axios";
import { useSelector } from "react-redux";

const url = "http://localhost:5000/api";

const PayButton = ({ViewScript}) => {

  const {_id,} = useSelector(state=>state.auth)
  const handleCheckout = () => {
    axios.post(`${url}/stripe/create-checkout-session`,
      {
        ViewScript,
        userId: _id,
    }).then((res) => {
      if(res.data.url){
      window.location.href = res.data.url;
      }
      })
      .catch((err) => console.log(err.message));
    // console.log(ViewScript);
    // console.log(_id);
  };
  return (
    <>
      <button className='paybtn' onClick={() => handleCheckout()}>Pay</button>
    </>
  );
};

export default PayButton;
