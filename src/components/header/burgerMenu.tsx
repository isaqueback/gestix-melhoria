import style from './burgerMenu.module.css'

export function BurgerMenu() {
  return (
    <div className={`lg:hidden ${style.burgerMenuContainer}`}>
      <input type="checkbox" id="burger-menu-input" className="hidden" />
      <label
        htmlFor="burger-menu-input"
        className="inline-block h-8 bg-foreground"
      >
        <span className={`bg-background ${style.burgerMenu}`}></span>
      </label>
    </div>
  )
}
