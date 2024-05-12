const Input = ({ label, id, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 justify-center ">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="bg-slate-600 text-white  placeholder-white"
      />
    </div>
  );
};

export default Input;
