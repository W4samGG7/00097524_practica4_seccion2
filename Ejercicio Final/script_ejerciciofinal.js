document.addEventListener("DOMContentLoaded", () => {
  const activities = {
    Lunes: "Los Lunes debo atender un cliente específico. ",
    Martes: "Los Martes visito una agencia fuera de la ciudad. ",
    Miercoles: "Los Miércoles debo llevar a mi hija al ballet (balé). ",
    Jueves: "En Jueves debo priorizar entregas de desarrollo. ",
    Viernes: "En Viernes debo atender problemas de manera remota. ",
    Sabado: "En Sábado debo hacer lo que mi esposa quiera. ",
    Domingo: "Descansa es tu dia libre",
  };

  function createMessage(day, reminder) {
    let message = day + ": " + reminder;
    return message;
  }

  function showReminder() {
    const daySelector = document.getElementById("weekDay");
    const result = document.getElementById("result");
    const daySelected = daySelector.value;

    if (!daySelected) {
      result.innerHTML =
        "Por favor, selecciona uno de los días de la lista para continuar.";
      return;
    }

    const messageFinal = createMessage(daySelected, activities[daySelected]);
    result.innerHTML = messageFinal;
  }

  document.querySelector(".events-reminder #selectButton").onclick =
    showReminder;
});
