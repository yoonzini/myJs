import React, {useState, useEffect} from 'react';

function Effect() {
    const [count, setCount] = useState(0);

    //렌더링 이후에 발생하는 것
    //effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장한다.
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            // effect 정리가 필요한 경우에는 함수를 반환한다.
            setCount(0);
            document.title = `clean up`;
        }
    });

    // 대부분의 effect는 동기적으로 실행될 필요가 없다.
    // 레이아웃의 측정과 같은 동기적 실행이 필요한 경우에는 
    // useEffect와 동일한 API를 사용하는 useLayoutEffect가 존재한다.
    return (
        <div>
            <p>You clicked!! {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )

   
}


