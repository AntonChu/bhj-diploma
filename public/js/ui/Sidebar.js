/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebar = document.getElementsByClassName(('sidebar-toggle'));
    const app = document.getElementsByTagName('body');

    sidebar[0].addEventListener('click', (event) => {
      app[0].classList.toggle('sidebar-open');
      app[0].classList.toggle('sidebar-collapse');
      event.preventDefault();
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const sideMenuLogin = document.getElementsByClassName('menu-item_login');
    const sideMenuRegister = document.getElementsByClassName('menu-item_register');
    const sideMenuLogout = document.getElementsByClassName('menu-item_logout');

    sideMenuLogin[0].onclick = () => {
      App.getModal('login').open();
    }
    
    sideMenuRegister[0].onclick = () => {
      App.getModal('register').open();
    }
    
    sideMenuLogout[0].addEventListener('click', () => {
      function callback() {
        App.setState('init');
      }
      User.logout(callback)
    })
  }
}