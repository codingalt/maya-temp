import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 border-t border-slate-200 opacity-40 hover:opacity-100 transition-opacity">
      <div className="text-center text-xs text-slate-500">
        <div className="flex flex-row items-center justify-center gap-2">
          <span>Made by Maya AI team with ❤️</span>
        </div>
        <div>Trusted by more than <span>2,000,000</span> users around the world</div>
      </div>
    </footer>
  )
}

export default Footer