import './App.css'

function App() {
  

  return (
    <>
       {/* 
        max-w-sm, mx-auto: giới hạn bề rộng thẻ và căn giữa ngang
        flex, items-center: bố cục ngang, căn giữa theo trục dọc
        gap-x-4: khoảng cách ngang giữa logo và phần text
        bg-white: nền trắng (chế độ sáng)
        rounded-xl: bo góc lớn
        p-6: khoảng đệm xung quanh
        shadow-lg: đổ bóng lớn (chế độ sáng)
        outline outline-black/5: đường viền mờ để tạo chiều sâu
        dark:bg-slate-800: nền tối trong chế độ dark
        dark:shadow-none: bỏ đổ bóng trong chế độ dark
        dark:-outline-offset-1: kéo outline gần lại trong dark mode
      */}
      {/* sm:flex-row sm:items-center sm:py-4 */}
      <div className="flex max-w-sm mx-auto items-center gap-x-4 rounded-2xl bg-bray-200 hover:bg-blue-300 p-6 shadow-lg outline outline-black/5 dark:bg-state-800 dark:shadow-none dark:-outline-offset-1 dar">
          {/* size-12, shrink-0: ảnh cố định 48px và không co lại khi thiếu chỗ */}
          {/* <img src='./vite.svg' alt="Vite"/> */}
          {/* <div className="flex flex-col"> */}
            {/* text-xl: cỡ chữ lớn; font-medium: bán đậm; text-black/dark:text-white: màu chữ sáng/tối theo theme */}
            
            {/* <div className="flex flex-col-2">
              <div className="text-xl font-medium text-black dark:text-white ">Message</div>
              <p className="text-gray-500 dark:text-gray-400">You have a new message</p>
              <p className="text-gray-500 dark:text-gray-400">5 notifications</p>
            </div> */}

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-y-4 flex">
              <div className="bg-red-200">1</div>
              <div className="text-md font-medium text-black dark:text-white">New Message</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">5 notifications</p>
              <img className="mx-3 my-[-30px] border border-black-200 rounded-3xl size-16 shrink-0" src="https://img.icons8.com/?size=100&id=108652&format=png&color=000000" alt="React Logo"/>
              <p className="text-sm text-gray-500 dark:text-gray-400">You have a new message</p>
              <p className="text-sm text-dark-200 dark:text-gray-200">2 mins ago</p>
            </div>

            {/* text-gray-500/dark:text-gray-400: màu chữ phụ thuộc theme */}
            {/* <button className="bg-sky-500 disabled:hover:bg-sky-700">Submit</button> */}
      </div>
      <div className="max-w-sm mx-auto flex items-center gap-x-4 rounded-2xl mt-5 p-6 shadow-lg outline outline-black/5">
        <img className="size-12 rounded-3xl shrink-0 border border-black-200" src="https://img.icons8.com/?size=100&id=IBgUXg3MQlTW&format=png&color=000000" alt="Vite Logo"></img>
        <div className="flex flex-col">
          <div className="basis-1/3 md:basis-1/3">New message</div>
          <div className="basis-1/3 xl:basis-1/3">New message</div>
          <div className="basis-1/3">New message</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="bg-red-200">1</div>
        <div className="bg-red-200">2</div>
        <div className="bg-red-200">3</div>
        <div className="bg-red-200">4</div>
      </div>

      <div className="grid grid-rows-3 gap-4 mt-10">
        <div>
          <div className="bg-red-100">2</div>
          <div className="bg-red-500">2</div>
          <div className="bg-red-500">2</div>
          <div className="bg-red-500">2</div>
          <div className="bg-red-500">2</div>
        </div>
        <div className="bg-red-200">2</div>
        <div className="bg-red-200">3</div>
        <div className="bg-red-200">4</div>
      </div>
    </>
  )
}

export default App
