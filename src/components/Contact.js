import { useEffect } from "react";

const Contact = () => {

    useEffect(()=>{
    console.log('useEFfect called')

    // const timer = setInterval(() => {
    //         console.log('interval start')
    //     }, 1000);


    //     return ()=>{
    //       clearInterval(timer);
    //     }
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </div>
  );
}

export default Contact;