import './App.css'
import reactLogo from './assets/react.svg';

function App() {
  

  return (
    <body>
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
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-state-800 dark:shadow-none dark:-outline-offset-1 dar">
          {/* size-12, shrink-0: ảnh cố định 48px và không co lại khi thiếu chỗ */}
          <img className="size-12 shrink-0" src={reactLogo} alt="React Logo"/>
          {/* <img src='./vite.svg' alt="Vite"/> */}
          <div>
            {/* text-xl: cỡ chữ lớn; font-medium: bán đậm; text-black/dark:text-white: màu chữ sáng/tối theo theme */}
            <div className="text-xl font-medium text-black dark:text-white">React Logo</div>
            {/* text-gray-500/dark:text-gray-400: màu chữ phụ thuộc theme */}
            <p className="text-gray-500 dark:text-gray-400">You have a new message</p>
          </div>
      </div>
    </body>
  )
}

export default App
