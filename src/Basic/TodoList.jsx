import { useState } from 'react';

function TodoList() {
  // khởi tạo state cho input todo
    const [todo, setTodo] = useState('');
  // khởi tạo state cho mảng todoList
    const [todoList, setTodoList] = useState(
      // // Kiểm tra xem có dữ liệu trong local storage không
      // ()=>{const storageList = JSON.parse(localStorage.getItem('todo'))
      // // Nếu có, trả về list từ local storage, nếu null/undefined, trả về một mảng rỗng
      // return storageList  ??  []}
      []);
    // hàm xử lý sự kiện thêm todo
    function handleSubmit(event) {
        event.preventDefault();
        setTodoList([...todoList,todo]);
        setTodo('')
    }

    // hàm thêm todo, lưu vào local storage
    // function handleSubmit(event) {
    //   event.preventDefault();
    //   setTodoList(prev => {
    //     // Tạo danh sách mới bằng cách thêm todo mới vào danh sách hiện tại
    //     const newList = [...prev, todo];
    //     // Chuyển đổi danh sách mới thành chuỗi JSON
    //     const jsonList = JSON.stringify(newList);
    //     // Lưu danh sách mới vào local storage với khóa "todo"
    //     localStorage.setItem("todo", jsonList);
  
    //     // Trả về danh sách mới để cập nhật giá trị của todoList
    //     return newList;
    //   });
    //   // Đặt giá trị của todo về rỗng sau khi thêm todo thành công
    //   setTodo('');
    // }
  
    // hàm xử lý khi hoàn thành todo
    function handleClick(todoIndex){
      setTodoList(prevTodoList => prevTodoList.filter((_, index) => index !== todoIndex));
    }
     // Hàm xử lý khi hoàn thành todo
    // function handleClick(todoIndex) {
    //   setTodoList(prevTodoList => {
    //     // Tạo danh sách mới bằng cách loại bỏ todo đã hoàn thành
    //     const updatedTodoList = prevTodoList.filter((_, index) => index !== todoIndex);

    //     // Chuyển đổi danh sách mới thành chuỗi JSON
    //     const jsonList = JSON.stringify(updatedTodoList);

    //     // Lưu danh sách mới vào local storage với khóa "todo"
    //     localStorage.setItem("todo", jsonList);

    //     // Trả về danh sách mới để cập nhật giá trị của todoList
    //     return updatedTodoList;
    //   });
    // }
  return (
    <>
    <div><input type="text" value={todo} onChange={event=>setTodo(event.target.value)}
    />
    <button type="submit" onClick={handleSubmit}>Add todo</button></div>
    <ul>
      {/* map toàn bộ todo trong mảng */}
        {todoList.map((todo, index) => (
            <li key={index}>{todo} <button onClick={()=>handleClick(index)}>Completed</button> </li>
        ))}
    </ul>
    </>
  );
}

export default TodoList;