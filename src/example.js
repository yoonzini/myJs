//useState Hook을 React에서 가져온다.
import React, {useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';

function Example() {
    // 새로운 state 변수를 선언하고, 이것을 count라 부른다.
    // 함수형은 원래 state를 갖지 않지만
    // hook을 사용하므로서 
    // useState는 state를 사용할 수 있다. 
    // state는 React에 의해 사라지지 않는다.
    // 객체일 필요는 없고, 숫자/문자 타입을 가질 수 잇다.
    // 초기값을 0으로 셋팅한 것이다.
    // count 변수의 값을 갱신하려면 setCount를 호출하면된다.
    // 반환값: state변수, 해당 변수를 갱신할수 있는 함수
    // = this.state.count, this.setState와 유사
    const [count, setCount] = useState(0);
    // useState Hook을 이용해 state변수와 해당 state를 갱신할 수 잇는 함수가
    // 만들어진다. useState의 인자의 값으로 0을 넘겨주면
    // count 값을 0으로 초기화할 수 있다.
    const [fruit, setFruit] = useState('banana');

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                {/** 클릭시 setCount 함수를 호출하여 state 변수를 갱신한다.
                 * count변수를 Example 컴포넌트에 넘기며 해당 컴포넌트를
                 * 리랜더링한다.
                 */}
                Click me
            </button>
            <p> {fruit} 드릴까요?</p>
            <button onClick={() => {setFruit('mango')}}>망고주세요.</button>
        </div>
    )
}



function Effect() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState('');
    useEffect(() => {

        document.title = `You clicked ${count}`;
        console.log('set Count' + count);
        return () => {
            // effect 정리가 필요한 경우에는 함수를 반환한다.
            //setCount(0);
            console.log('clean up=' + count );
            setStatus(count + '가 정리되었습니다.');
           
        };
    }, [count]); // count가 바뀔때만 effect르르 실행한다.

    return (
        <div>
            <p>!!!You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <span>{status}</span>
        </div>
    )
}

const friendList = [
    {id : 1, name: 'Phobe'},
    {id : 2, name: 'Rachel'},
    {id : 3, name: 'Ross'},
]

function ChatRecipientPicker() {
    const [recipientID, setRecipientID] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientID);
    const getRachelStatus = FriendStatus(2);
    console.log("getRachel:" + getRachelStatus);

    return (
        <>
            <span style={{background : isRecipientOnline ? 'green' : 'red'}}>O</span>
            <select 
                value={recipientID}
                onChange={e => setRecipientID(Number(e.target.value))}
            >
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
            <span>{getRachelStatus}</span>
        </>
    );
}

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        
        setIsOnline("online");

        console.log(friendID, 'change status on : ',isOnline);
        console.log("status.isOnline=", isOnline);

        return () => {
            setIsOnline("offline");
            console.log(friendID, "change prev status off : ", isOnline)
        }

    }, [friendID, isOnline]);

    return isOnline;
}

function FriendStatus(id) {
    const isOnline = useFriendStatus(id);
  
    if (isOnline === null) {
        console.log('Loading...' + id);
      return 'Loading...';
    }
    
    return isOnline ? 'Online' : 'Offline';
  }

//ReactDOM.render(
//    <><ChatRecipientPicker/></>, document.getElementById('root')
//)

function test() {
    // 기본변수할당
    var foo = ["one", "two", "three"];
    var [one, two, three] = foo;

    // 선언에서 분리한 할당
    var a, b;
    [a, b] = [1, 2];

    // 기본값
    var a, b;
    [a=5, b=7] = [1];
    console.log(a); // 1
    console.log(b); // 7

    //변수값 교환하기
    var a = 1;
    var b = 3;
    [a, b] = [b, a]
    console.log(a); // 3
    console.log(b); // 1

 

}

// 함수가 반환한 배열 분석
function f() {
    return [1, 2, 3];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

// 필요하지 않은 반환값 무시
var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
[,,] = f(); // 반환값을 모두 무시할 수도 있다.

// 변수에 배열의 나머지를 할당하기
var [a, ...b] = [1,2,3];
console.log(a); // 1
console.log(b); // [2, 3]

function parseProtocol(url) {
    url = "https://developer.mozilla.org/en-US/Web/JavaScript";
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    //["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
    if (!parsedURL) {
        return false;
    }

    var [, protocol, fullhost, fullpath] = parsedURL;

    return protocol;
    
    
}
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript'));
// "https"