import { useState } from 'react';

function Checkbox() {
  // Khởi tạo biến `checked` và hàm `setChecked` bằng useState
  const [checked, setChecked] = useState([]);

  // Xử lý sự kiện khi checkbox thay đổi trạng thái
 function handleChange(id) {
  if (checked.includes(id)) {
    // Nếu id đã tồn tại trong mảng `checked`, loại bỏ id đó khỏi mảng
    setChecked(checked.filter(item => item !== id));
  } else {
    // Nếu id chưa tồn tại trong mảng `checked`, thêm id vào mảng
    setChecked([...checked, id]);
  }
}

// Xử lý sự kiện khi người dùng nhấn nút "Submit"
  function handleSubmit() {
    console.log(checked);
  }

  // Một mảng chứa các đối tượng ví dụ
  const example = [
    {
      id: 1,
      name: 'something',
    },
    {
      id: 2,
      name: 'something2',
    },
    {
      id: 3,
      name: 'something3',
    },
  ];

  return (
    <>
      {/* Duyệt qua mảng `example` và tạo các radio button */}
      {example.map((item) => (
        <>
        {/* Tạo một checkbox với các thuộc tính */}
          <input
            key={item.id}
            type="checkbox"
            checked={checked.includes(item.id)} // Kiểm tra xem checkbox này có được chọn hay không
            onChange={() => handleChange(item.id)} // Khi checkbox được chọn, cập nhật giá trị của `checked`
          />
          {item.name}
          <br />
        </>
      ))}

      {/* Nút "Submit" để gửi giá trị của `checked` */}
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Checkbox;