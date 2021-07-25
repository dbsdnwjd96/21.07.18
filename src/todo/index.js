
const todos = [
    const todo = {
        id: 0,
        label: '밥먹기',
        isDone: false, //완료여부 체크상태값
      },
      const todo = {
        id: 1,
        label: '공부하기',
        isDone: false, //완료여부 체크상태값
      }
      
]


// 새로운 TODO 추가하기
// push ==> spreadOperator 를 더 많이 사용


const addedTodos = [
    ...todos,
    {
        id: 2,
        label: '추가된 TODO',
        isDone: false, //방금 추가된 값들은 항상 isDone false
    },
] //...알맹이들을 풀어낸다

console.log('addedTodos', addedTodos)

/*
// 삭제하기

slice, splice 잘 안씀
요즘에는 filter 사용
*/
//이름은 짓기 나름이지만, todos의 반복이니 todo
const removeTodos = addedTodos.filter((todo) => {
    return todo.id !== 2
})

console.log('removeTodos', removeTodos)


// 값의 업데이트
/*
map => 원본배열을 가지고 새로운 배열을 만들어낸다

0의 id를 가진 todo 의 isDone 값을 true로 바꾸고 싶다.

=> 없데이트가 완료된 배열에는 0번째 id를 가진 todo 는 isDone일것이다.

*/
/*
const updatedTodos = addedTodos.map((todo) => {
    if(todo.id === 0){
        //업데이트 필요
        return {...todo, isDone: !todo.isDone} // 현재상태를 한번 뒤집는다.
    }else {
        return todo 
    }
})
*/

// 조금 더 이쁘게!

const updatedTodos = addedTodos.map((todo) => {
    // if(todo.id === 0){
    //     //업데이트 필요
    //     return {...todo, isDone: !todo.isDone} // 현재상태를 한번 뒤집는다.
    // }else {
    //     return todo 
    // }

    return todo.id === 0 ? {...todo, isDone: !todo.idDone} : todo
})


console.log('updatedTodos', updatedTodos)

// some(or), every(and)

const isAllCompleted =  todos.every((todo) => {
    return todo.isDone
})
console.log('isAllCompleted', isAllCompleted)

const hasCompleted = todos.some((todo) => {
    return todo.isDone
})
console.log('hasCompleted', hasCompleted)