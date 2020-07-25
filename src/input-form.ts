import './img/favicon.ico';
import './styles/input-form.scss';
import { TextAreaWithSave } from './components/TextAreaWithSave';

(() => {
  'use strict';

  function init() {
    console.log('[input-form] init()');

    const textArea: TextAreaWithSave = new TextAreaWithSave({
      formEle: document.getElementById('form-message'),
      ele: document.getElementById('form-message__textarea') as HTMLTextAreaElement,
      saveBtn: document.querySelector('.form__btn-save'),
      clickSaveBtnCallback: (evt: MouseEvent): void => {
        evt.preventDefault();

        // TODO: Need to implement additional features.
        window.alert(`You clicked save button. value : ${textArea.getValue()}`);
      },
      maxCharNum: 100,
    }).init();

    const toggleDisabledBtn = document.querySelector('.btn-toggle-disabled');
    toggleDisabledBtn?.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (textArea.isDisabled) {
        textArea.setDisabled(false);
      } else {
        textArea.setDisabled(true);
      }
    });

    const toggleReadonlyBtn = document.querySelector('.btn-toggle-readonly');
    toggleReadonlyBtn?.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (textArea.isReadonly) {
        textArea.setReadOnly(false);
      } else {
        textArea.setReadOnly(true);
      }
    });
  }

  init();
})();
