import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CheckCircle2, XCircle } from 'lucide-react'

export function Toast() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      newestOnTop={false}
      hideProgressBar={true}
      toastStyle={{
        backgroundColor: '#222',
        color: '#d4d4d4',
        borderRadius: '0.5rem',
        fontSize: '14px',
        border: '1px solid #333',
        userSelect: 'none',
        width: '250px',
      }}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  )
}

export function successAlert(text: string) {
  toast.success(`${text}`, {
    icon: <CheckCircle2 className="text-emerald-400" size={24} />,
  })
}

export function errorAlert(text: string) {
  toast.error(`${text}`, {
    icon: <XCircle className="text-red-400" size={24} />,
  })
}
