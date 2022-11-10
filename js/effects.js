// По умолчанию должен быть выбран эффект «Оригинал».
// На изображение может накладываться только один эффект.
// При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту. Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.

const image = document.querySelector('.img-upload__preview');
const form = document.querySelector('.img-upload__form');
const defaultImageClass = '.img-upload__preview';

const onFilterChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const nameOfClass = `effects__preview--${evt.target.value}`;
    image.classList = defaultImageClass;
    image.classList.add(nameOfClass);
  }
};
form.addEventListener('change', onFilterChange);

// ДОПОЛНИТЕЛЬНО
// Интенсивность эффекта, накладываемого на изображение, регулируется перемещением ползунка в слайдере. Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider. Уровень эффекта записывается в поле .effect-level__value. При изменении уровня интенсивности эффекта (предоставляется API слайдера), CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.
// При выборе эффекта «Оригинал» слайдер скрывается.
// При переключении эффектов, уровень насыщенности сбрасывается до начального значения (100%): слайдер, CSS-стиль изображения и значение поля должны обновляться.

// const EFFECTS = {
//   {defailt},
//   {filter: grayscale(0..1) с шагом 0.1;},
//   {filter: sepia(0..1) с шагом 0.1},
//   {filter: invert(0..100%) с шагом 1%},
//   {filter: blur(0..3px) с шагом 0.1px},
//   {filter: brightness(1..3) с шагом 0.1}
// }
