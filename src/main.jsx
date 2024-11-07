
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}
  future={{
    v7_startTransition: true,
  }}
  />

)
