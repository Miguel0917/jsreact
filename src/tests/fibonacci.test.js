import {renderHook} from '@testing-library/react-hooks';
import useFibonacci from '../hooks/useFibonaci';

describe("Vamos a probar la hook para la serie fibonacci", () => {

    const {nums} = renderHook(() => useFibonacci(5));

    console.log(nums)
});