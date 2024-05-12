import Input from "./shared/Input";

const Form = () => {
  const formField = [
    {
      id: "name",
      label: "Name",
      type: " text",
      placeholder: "Enter Name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Email",
    },
    {
      id: "age",
      label: "Age",
      type: "number",
      placeholder: "Enter Age",
    },
  ];

  const handleSubmit = () => {
    window.alert("submited");
  };
  return (
    <>
      <h1>Form</h1>
      <form className="flex flex-col gap-4 justify-center">
        {formField.map((item) => (
          <Input
            key={item.id}
            type={item.type}
            id={item.id}
            placeholder={item.placeholder}
            label={item.label}
          />
        ))}
        <button onClick={handleSubmit} type="submit" className="bg-blue-400">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
