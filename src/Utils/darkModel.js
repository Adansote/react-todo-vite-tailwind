//  este archivo sirve para detectar la preferencia del sistema operativo en el tema del color claro o dark 
if (localStorage.theme === 'dark' ||
 (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
  
  