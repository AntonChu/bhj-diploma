/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */

// const { response } = require("express");

class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Счета не существует');
    };
    this.element = element;
    this.registerEvents();
    this.update();
  }

  /**
   * При нажатии на .create-account открывает окно
   * #modal-new-account для создания нового счёта
   * При нажатии на один из существующих счетов
   * (которые отображены в боковой колонке),
   * вызывает AccountsWidget.onSelectAccount()
   * */
  registerEvents() {
    document.getElementsByClassName('create-account')[0].onclick = ()  => {
      console.log('button is pushed')
      App.getModal('createAccount');
    };
    
    this.element.addEventListener('click', (event) => {
      // console.log(event.srcElement.classList);
      if (event.srcElement.classList.contains('account')) {
        this.onSelectAccount(event.srcElement);
      }  
    })
  }

  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода renderItem()
   * */
  update() {
    if (User.current()) {
      Account.list(User.current, (err, response) => {
        if(response) {
          this.clear();
          response.data.forEach(item => this.renderItem(item));
        }
      })
    }
  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {
    Array.from(document.getElementsByClassName('account')).every((item) => {
      item.remove();
    })
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
  onSelectAccount( element ) {
    Array.from(document.getElementsByClassName('account')).every((item) => {
      item.classList.remove('active');
      element.classList.add('active');
    })
  }

  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
  getAccountHTML(item){
   return (
      `<li class="account" data-id="${item.id}"><a href="#"><span>${item.name}</span><span>${item.sum} ₽</span></a></li>`
    )
  }

  /**
   * Получает массив с информацией о счетах.
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
  renderItem(data){
    console.log(data);
    data.forEach(el => {
      this.element.insertAdjacentHTML('beforeEnd', this.getAccountHTML(el));
    })
  }
}
