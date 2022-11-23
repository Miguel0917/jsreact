import { useEffect, useState } from "react";

const useFibonacci = (num) => {

    const [nums, setNums] = useState([]);

    const handleFibonnaci = () => {

        let serie = [0, 1];
        let fibonacci = [];
        
        for(let i = 2; i <= num; i++){
            serie[i] = serie[i-1]+serie[i-2];
            fibonacci.push(serie[i]);
        }

        console.log(fibonacci);

        setNums(fibonacci);
    }

    useEffect(() => {

        if(num){
            handleFibonnaci(num);
        }
    }, [num]);


    return {nums};
 }

export default useFibonacci;