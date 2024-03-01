

const Input=({lable,type,id,...props})=>{
    return (
        <div className="mb-4">
            <lable htmlFor={id} className="block text-gray-600 font-semibold mb-2">{lable}</lable>
            <input 
                type={type}
                id={id}
                name={id}
                autoComplete="off"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                {...props}
            />
        </div>
    )
}

export default Input;