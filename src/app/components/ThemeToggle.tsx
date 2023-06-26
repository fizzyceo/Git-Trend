'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { FC } from 'react'
import { toast } from 'react-hot-toast'
import Switch from 'react-switch'
interface ThemeToggleProps {
  
}


export const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const theme = useTheme()
  const changeMode = ()=>{
    toast.success("mode changed seccesfully")
    theme.setTheme(
      theme.theme=='dark'?
      'light' :'dark')
  }

  return <Switch
  onColor="#d231a7"
  boxShadow="#d231a7"
  onChange={changeMode}
  checked={theme.theme==='dark' ? true: false}
  uncheckedIcon={<Sun height={18} className='relative top-1 text-slate-300 fill-slate-800'/>}
  checkedIcon={<Moon height={18} className='relative top-1 text-slate-300 fill-black'/>
  }
/>
}

