import { useState } from 'react';

function Radio() {
  // Khởi tạo biến `checked` và hàm `setChecked` bằng useState
  const [checked, setChecked] = useState(3);

  // Xử lý sự kiện khi người dùng nhấn nút "Submit"
  function handleSubmit() {
    console.log({ id: checked });
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
          {/* Tạo một radio button với các thuộc tính */}
          <input
            key={item.id}
            type="radio"
            checked={checked === item.id} // Kiểm tra xem radio button này có được chọn hay không
            onChange={() => setChecked(item.id)} // Khi radio button được chọn, cập nhật giá trị của `checked`
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

export default Radio;