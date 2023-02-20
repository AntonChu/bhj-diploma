/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(!element) {
      throw new Error ('Окно трансзакций отсутствует');
    }
    this.element = element;
    this.registerEvents();
    
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    document.getElementsByClassName('create-income-button')[0].onclick = () => {
      App.getModal('#modal-new-income');
    }

    document.getElementsByClassName('create-expense-button')[0].onclick = () => {
      App.getModal('#modal-new-expense');
    }
  }
}
